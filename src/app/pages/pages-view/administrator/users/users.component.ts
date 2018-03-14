import { Component, OnInit } from '@angular/core';
import { User, UserComplete } from '../../../../models/user';
import { UserService } from '../../../../services/data/user.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersList();

  }


  /*
  *display tab users
  */
  observavleUserList: Observable<any[]>;
  usersList: UserComplete[];
  COLUMNSTABLE: Array<[string, string]> = [
    ['id', 'Id'],
    ['firstname', 'Prénom'],
    ['lastname', 'Nom'],
    ['email', 'Email'],
    ['phoneNumber', 'numéro tel'],
    ['activated', 'activé'],
  ];

  getUsersList() {

    this.observavleUserList = this.userService.getAll();
    this.observavleUserList.subscribe(reponse => this.usersList = reponse);
  }
}
