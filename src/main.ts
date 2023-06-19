import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { CatModule } from './cat/cat.module';
import { HttpExceptionFilter } from './cat/http-exception-filter';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(port);
}
bootstrap();
