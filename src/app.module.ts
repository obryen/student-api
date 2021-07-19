import { HttpModule, Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [HttpModule, StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
