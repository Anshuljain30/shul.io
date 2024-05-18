import { Controller, Get } from '@nestjs/common';
import { IamMsService } from './iam-ms.service';

@Controller()
export class IamMsController {
  constructor(private readonly iamMsService: IamMsService) {}

  @Get()
  getHello(): string {
    return this.iamMsService.getHello();
  }
}
