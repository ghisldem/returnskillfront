import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { WebService } from './web.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  users : Array<User>; //mock (fausses données  pour test)
  page : number = 0;
  size : number = 4;


  constructor(private webService :  WebService) { 
    this.users = new Array<User>();
    this.users.push({id : 1, lastname : 'Ferrand', firstname : 'Julien' }); //test
    this.users.push({id : 2, lastname : 'Dugrain', firstname : 'Rémi'}); //test
  }


  getAll(): Observable<User[]> {
    return this.webService.getAll("users?page="+this.page+"&size="+this.size ).map(r => r.content);
  }

  get(id: number): User {
    return null;
  }

  create(user : User): void { }

  delete(): void { }

  update(user: User): void { }



}