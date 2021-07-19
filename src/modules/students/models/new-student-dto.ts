import { IsEmail, IsNotEmpty } from 'class-validator';

export class Newstudent {
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  email: string;
  username?: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  dob: Date;
  gender?: string;
  otp_code?: string;
}
