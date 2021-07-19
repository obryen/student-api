import { Injectable } from '@nestjs/common';
import { EmailService } from '../../../../src/modules/notifications/email.service';
import { DatabaseService } from '../../../../src/configs/database.service';
import { Newstudent } from '../models/new-student-dto';

@Injectable()
export class StudentsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
  ) {}

  async registerStudent(newStudent: Newstudent) {
    // add student to db
    const savedStudent = await this.databaseService.addRecord(
      'students',
      Math.random().toString(),
      newStudent,
    );

    await this.emailService.sendEmailToNewUser(newStudent);

    return savedStudent;
    // send email for registration
  }
}
