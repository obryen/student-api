import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MailerConfigService } from './mailer-config.service';

const providers = [DatabaseService, MailerConfigService];

@Global()
@Module({
  providers: providers,
  exports: providers,
})
export class ConfigurationModule {}
