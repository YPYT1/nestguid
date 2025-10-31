//应用程序的根模块。
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat/cat.CatsController';
import { UsersModule } from './users/users.module';
import { CastsModule } from './cat/cat.moudel';

@Module({
  imports: [UsersModule, CastsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
