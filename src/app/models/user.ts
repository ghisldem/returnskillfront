export class User {
  
       id : number;
       lastname : string;
       firstname : string;

       constructor(id: number, lastname : string, firstname : string){
        }
  }


export class UserComplete extends User{

  email : string;
  phoneNumber : string;

  constructor(id: number, lastname : string, firstname : string){
    super(id, lastname, firstname);
  }

}