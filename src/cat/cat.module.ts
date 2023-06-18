import { Module } from '@nestjs/common';
import { CatService, PostService } from './cat.service';
import { CatController, PostController } from './cat.controller';

@Module({
  controllers: [CatController, PostController],
  providers: [CatService, PostService],
})
export class CatModule {}
