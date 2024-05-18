import { Injectable } from '@nestjs/common';

@Injectable()
export class IamMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
