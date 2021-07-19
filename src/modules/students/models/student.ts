export class Students {
  constructor(intialData: Partial<Students> = null) {
    if (intialData !== null) {
      Object.assign(this, intialData);
    }
  }

  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  dob: string;
  gender: string;
}
