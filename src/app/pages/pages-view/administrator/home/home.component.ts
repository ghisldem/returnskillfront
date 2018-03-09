import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/data/user.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  /**
   *display tab users
   */
  observavleUserList: Observable<any[]>;
  COLUMNSTABLE: Array<[string, string]> = [
    ['id', 'Id'],
    ['firstname', 'Prénom'],
    ['lastname', 'Nom'],
    ['email', 'Email'],

    // ['phoneNumber', 'num tel']
  ];

  getUsersList() {
    this.observavleUserList = this.userService.getAll();
  }

}
