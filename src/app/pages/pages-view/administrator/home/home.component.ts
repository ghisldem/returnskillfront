import { Component, OnInit } from '@angular/core';

import {Observable } from 'rxjs/observable';

/**
 * Models
 */
import { User } from '../../../../models/user';
import { Skill} from '../../../../models/Skill';

/**
 * Services
 */
import { UserService } from '../../../../services/data/user.service';
import { SkillService } from '../../../../services/data/skill.service';
import { Action } from '../../../../components/actions/table-actions/table-actions.component';

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
this.getUsersList();
this.getSkillsList();

this.actionsOnUser = [{tag:"edit",icon:"edit", control: this.editUserFromTable}]

}

editUserFromTable(user:User) {

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
