import { NestFactory } from '@nestjs/core';
import { IamMsModule } from './iam-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(IamMsModule);
  await app.listen(3000);
}
bootstrap();
