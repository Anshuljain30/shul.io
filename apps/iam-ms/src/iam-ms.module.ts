import { Module } from '@nestjs/common';
import { IamMsController } from './iam-ms.controller';
import { IamMsService } from './iam-ms.service';

@Module({
  imports: [],
  controllers: [IamMsController],
  providers: [IamMsService],
})
export class IamMsModule {}
