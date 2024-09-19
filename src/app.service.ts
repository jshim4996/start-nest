import { Injectable } from '@nestjs/common';

// 실제 함수를 실행 하는 역활
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
}
