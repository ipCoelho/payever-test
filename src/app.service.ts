import { Injectable } from '@nestjs/common';
import { User, UserSchema } from './schemas/user.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUser(data: User): object {
    const userInfo = data;

    return userInfo;
  }
}
