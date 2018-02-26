import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/data/user.service';
import { Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { } from '';

@Component({
  selector: 'app-user-complete-form',
  templateUrl: './user-complete-form.component.html',
  styleUrls: ['./user-complete-form.component.css']
})

export class UserCompleteFormComponent implements OnInit {

  user: User;
  users: User[];


  constructor(private userService: UserService) {
    this.user = {
      id: 1,
      lastname: "toto",
      firstname: "ghislain",
      email: "gd@gmail",
      phoneNumber: "07.06.05.04",
      townOfResisdence : "lille"
    }
  }

  getAllUsers() {
    this.userService.getAll().subscribe(reponse => this.users = reponse);

  }

  getUserById() {
    this.userService.get(2).subscribe(reponse => console.log(this.user = reponse));
  }

  update(){
    console.log(this.user);
    this.userService.update(this.user);
  }

  ngOnInit() {
    this.getAllUsers();
    this.getUserById();
  }


}


