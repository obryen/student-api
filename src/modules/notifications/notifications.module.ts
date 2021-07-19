import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailerConfigService } from '../../../src/configs/mailer-config.service';
import { ConfigurationModule } from '../../../src/configs/config.module';
import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigurationModule],
      useExisting: MailerConfigService,
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class NotificationsModule {}
