import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { CatModule } from './cat/cat.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  await app.listen(port);
}
bootstrap();
