import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable, Logger } from '@nestjs/common';
import * as util from 'util';
import { Newstudent } from '../students/models/new-student-dto';

@Injectable()
export class EmailService {
  constructor(private readonly mailerProvider: MailerService) {}

  async sendEmailToNewUser(newUserData: Newstudent) {
    try {
      await this.mailerProvider.sendMail({
        to: newUserData.email,
        from: `bryantoromo@gmail.com`,
        subject: `OTP`,
        template: `new-user-email`,

        context: {
          first_name: newUserData.first_name,
          otp_code: newUserData.otp_code,
        },
      });
    } catch (error) {
      Logger.log('[sendEmailToNewUser]', util.inspect(error));
    }
  }
}
