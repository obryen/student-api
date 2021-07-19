import { HttpModule, Module } from '@nestjs/common';
import { ConfigurationModule } from '../../../src/configs/config.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { StudentsService } from './services/students.service';
import { StudentsController } from './students.controller';

@Module({
  imports: [HttpModule, ConfigurationModule, NotificationsModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
