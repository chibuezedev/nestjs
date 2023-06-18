import { Injectable } from '@nestjs/common';
import { CreateCatDto, CreatePostDto } from './dto/create-cat.dto';
import { UpdateCatDto, UpdatePostDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  create(createCatDto: CreateCatDto) {
    this.create(createCatDto);
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    this.update(id, updateCatDto);
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    this.create(createPostDto);
    return 'This action creates a post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    this.findOne(id);
    return `This action returns a post with id ${id}`;
  }

  update(updatePostDto: UpdatePostDto, id: number) {
    this.update(updatePostDto, id);
    return 'This action updates a post with id ' + id;
  }

  remove(id: number) {
    this.remove(id);
    return `This action removes a post with id ${id}`;
  }
}
