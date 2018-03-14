import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable()
export class ActionsUserService {

 
  constructor() { }

  deleteUser() {

  }

  getUser(user : User) {

    console.log('entrée dans service méthode getUser');
    console.log(user);
    console.log('sortie du service méthode getUser');
  }



}
