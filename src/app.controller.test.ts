import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// 하나의 라우터가 있는 기본 컨트롤러
@Controller('/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello2();
  }
}

