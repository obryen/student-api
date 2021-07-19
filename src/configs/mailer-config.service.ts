import { MailerModule, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class MailerConfigService implements MailerOptionsFactory {
  constructor() {}

  createMailerOptions(): MailerModule {
    const mailerConfig: MailerModule = {
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        pool: true,
        maxConnections: 10,
        maxMessages: 1000,
        auth: {
          user: 'bryantoromo@gmail.com',
          pass: 'pass',
        },
      },
      defaults: {
        from: `Students portal`,
      },
      template: {
        dir: path.resolve(
          __dirname,
          '../../modules/notifications/emails/email-template',
        ),
        options: {
          strict: false,
        },
      },
    };
    return mailerConfig;
  }
}
