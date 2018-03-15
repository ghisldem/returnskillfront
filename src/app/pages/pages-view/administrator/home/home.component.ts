import { Component, OnInit } from '@angular/core';

import {Observable } from 'rxjs/observable';

/**
 * Models
 */
import { User } from '../../../../models/user';
import { Skill} from '../../../../models/Skill';
import { Action} from '../../../../models/features/action';


/**
 * Services
 */
import { UserService } from '../../../../services/data/user.service';
import { SkillService } from '../../../../services/data/skill.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** actions to apply to a table de type user */
  actionsOnUser: Action [] ;

  constructor( private userService: UserService, private skillService :  SkillService){}

ngOnInit() {
const that =  this;
this.actionsOnUser = [
  {tag: 'edit', icon: 'pencil', control: function (user) {that.editUserFromTable(user); } }


];
this.getUsersList();
this.getSkillsList();



}

/**
 * definition actions on user
 */

editUserFromTable(user: User) {

}


/*
*display tab users
*/
observavleUserList : Observable<any[]>;
usersList: User[];
COLUMNSTABLE: Array<[string, string]> = [
['id', 'Id'],
['firstname', 'Prénom'],
['lastname', 'Nom'],
['email', 'Email'],

// ['phoneNumber', 'num tel']
];

getUsersList() {

this.observavleUserList = this.userService.getAll();
this.observavleUserList.subscribe(reponse => this.usersList = reponse);
}

  /*
  *display tab Skills
  */
 observavleSkillsList: Observable<any[]>;
 skillsList: Skill[];
 COLUMNSTABLESKILL: Array<[string, string]> = [
   ['id', 'Id'],
   ['tag', 'Tag'],
   ['description', 'Description'],
   ['type', 'Catégorie'],
 ];


 getSkillsList() {

   this.observavleSkillsList = this.skillService.getAll();
   this.observavleSkillsList.subscribe(reponse => this.skillsList = reponse);
 }

}
