import { Component, OnInit } from '@angular/core';
/*
 * components
 */
import {} from '../../_components/forms/login-form';

/*
 * models
 */
import {UserComplete, User} from '../../../models/user'

/*
 * services
 */
import {UserService} from '../../../services/data/user.service'



@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})




export class PageTestComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsersList();
    console.log( this.COLUMNSTABLE);
  }


  //display tab users
usersList : User[];
COLUMNSTABLE : Array<[string, string]> = [
  ['id','Id' ],
  ['firstname','Prénom' ],
  ['lastname','Nom' ]
];

getUsersList(){
  this.userService.getAll().subscribe(reponse =>  this.usersList = reponse);
}



}


class TableUser {

  constructor(private userService : UserService){

  }

}