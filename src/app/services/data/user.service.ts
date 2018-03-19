import { Injectable } from '@angular/core';
import { User, UserComplete, PaginatorAndUser } from '../../models/user';
import { WebService } from './web.service';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { deserialize } from 'json-typescript-mapper';

@Injectable()
export class UserService {

  users: Array<User>; //mock (fausses données  pour test)
  page: number = 0;
  size: number = 100;


  constructor(private webService: WebService) {

  }

  /** mapping response in object */
  mapArrayOfObjectToUser(a: Object[]): User[] {
    let r: User[] = [];
    a.forEach(element => {
      let u: User = new User();
      u.copyFrom(element);
      r.push(u);
    });
    return r;
  }

    /** mapping response in object */
    mapArrayOfObjectToUser2(a: Object[]): User[] {
      let r: User[] = [];
      a.forEach(element => {
        let u: User = new User();
        u= deserialize(User, element);
        r.push(u);
      });
      return r;
    }

  mapArrayOfObjectToUserAndPaginator(a: Object): PaginatorAndUser {

    let pU :  PaginatorAndUser =  new PaginatorAndUser();
    return pU;
  }


  getUserCompleteAll(): Observable<UserComplete[]> {
    return this.webService.getAll("users/complete?page=" + this.page + "&size=" + this.size).map(r => r.content);
  }

  getAll(): Observable<User[]> {
    return this.webService.getAll("users?page=" + this.page + "&size=" + this.size).map(r => this.mapArrayOfObjectToUser2(r.content));
  }

  get(id: number): Observable<User> {
    return this.webService.get("users", id);
  }

  create(user: User): Observable<User> {
    return this.webService.create("users/", user);
  }

  delete(): void { }

  update(user: User): Observable<User> {
    let id: number = user.id;
    return this.webService.update("users/" + id, user);
  }



}