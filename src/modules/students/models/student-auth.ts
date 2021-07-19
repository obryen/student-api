export class StudentsAuth {
  constructor(intialData: Partial<StudentsAuth> = null) {
    if (intialData !== null) {
      Object.assign(this, intialData);
    }
  }

  student_id: string;
  password: string;
}
