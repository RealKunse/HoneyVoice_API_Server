import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestFactory 기능을 사용해 Nest 어플리케이션 인스턴스를 생성하는
// 어플리케이션의 엔트리 파일

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot){
    module.hot.accept();
    module.hot.dispose(()=> app.close())
  }
}
bootstrap();
