export class PeopleModel {
  constructor(intialData: Partial<PeopleModel> = null) {
    if (intialData !== null) {
      Object.assign(this, intialData);
    }
  }
  id: string;
  student_id: string;
  course_name: string;
  registration_date: string;
}
