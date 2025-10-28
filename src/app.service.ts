//一个具有单个方法的基本服务。
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '王令涛';
  }
}
