import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// nest 시작 명령어 start:dev 로 해야 로직을 수정하여 저장 했을경우 저장이 된다. => watch 상태 (start:debug 동일)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe 라인 추가
  app.useGlobalPipes(
    // 유효성 검사
    new ValidationPipe({
      whitelist: true,
      // 설정되지 않은값을 받을 경우 에러 발생시킴
      forbidNonWhitelisted: true,
      // 전달받은 값을 controller 에 사용하는 타입으로 자동 변환
      transform: true,
    }),
    // 전달받은 값들 컨트롤러 에 설정된 타입에 맞게 변환
  );
  await app.listen(3000);
}
bootstrap();
