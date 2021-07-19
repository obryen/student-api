import { Body, Controller, Post } from '@nestjs/common';
import { Newstudent } from './models/new-student-dto';
import { StudentsService } from './services/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('register')
  async fetchProviderByEmail(@Body() createStudentDTO: Newstudent) {
    return await this.studentsService.registerStudent(createStudentDTO);
  }
}
