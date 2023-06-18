import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto, CreatePostDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
