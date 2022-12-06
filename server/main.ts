import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './connections/providers/mysql.provider';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const root = process.cwd();


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  const viewsPath = join(root, 'public');
  app.setBaseViewsDir(viewsPath);
  app.setViewEngine('hbs');
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
