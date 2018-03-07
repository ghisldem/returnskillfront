import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/data/user.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


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
