import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { CatService, PostService } from './cat.service';
import { CreateCatDto, CreatePostDto } from './dto/create-cat.dto';
import { UpdateCatDto, UpdatePostDto } from './dto/update-cat.dto';
import { HttpExceptionFilter } from './http-exception-filter';

class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @UseFilters(new HttpExceptionFilter())
  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  async findAll() {
    try {
      await this.catService.findAll();
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if (!id || id == '0') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    try {
      await this.catService.findOne(+id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'This is a custom error',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!id) {
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }
    return this.catService.remove(+id);
  }
}

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(updatePostDto, +id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
