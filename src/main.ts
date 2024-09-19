import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// nest 시작 명령어 start:dev 로 해야 로직을 수정하여 저장 했을경우 저장이 된다. => watch 상태 (start:debug 동일)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
