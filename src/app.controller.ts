import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// url 을 가져오고 function 을 실행하는 역활
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return 'Hellow service';
  }
}
