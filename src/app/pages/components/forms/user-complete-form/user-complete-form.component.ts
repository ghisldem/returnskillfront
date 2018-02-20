import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/data/user.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-complete-form',
  templateUrl: './user-complete-form.component.html',
  styleUrls: ['./user-complete-form.component.css']
})
export class UserCompleteFormComponent implements OnInit {

  user: User;
  users: User[];

  constructor( private userService: UserService) {

  }

  getAllUsers() {
    this.userService.getAll().subscribe(reponse => this.users = reponse);

  }

  ngOnInit() {
    this.getAllUsers();
  }

}
