export class User {
  id: number;
  lastname?: string;
  firstname?: string;
  email: string;
  phoneNumber?: string;
  townOfResidence?: String;
  referent?: User;
  constructor() {
  }
}

export class UserComplete extends User {
  activated?: boolean;
  registrationDate?: Date;
	lastConnectionDate?: Date;
  constructor() {
    super();
  }
}

export class UserAuthentication {
  email: string;
  password: string;
}






