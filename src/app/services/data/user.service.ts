import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { WebService } from './web.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  users : Array<User>; //mock (fausses données  pour test)
  page : number = 0;
  size : number = 10;


  constructor(private webService :  WebService) { 
    this.users = new Array<User>();
    this.users.push({id : 1, lastname : 'Ferrand', firstname : 'Julien', email: "fj@gmail", phoneNumber: "07.06.05.02", townOfResisdence:"lille" }); //test
    this.users.push({id : 2, lastname : 'Dugrain', firstname : 'Rémi', email: "dr@gmail", phoneNumber: "07.06.05.03", townOfResisdence:"lille"}); //test
  }


  getAll(): Observable<User[]> {
    return this.webService.getAll("users?page="+this.page+"&size="+this.size ).map(r => r.content);
  }

  get(id: number): Observable<User> {
    return this.webService.get("users",id);
  }

  create(user : User): void { }

  delete(): void { }

  update(user: User): Observable<User> {
    return this.webService.update("users",user);
   }



}