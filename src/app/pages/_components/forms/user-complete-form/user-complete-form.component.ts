import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/data/user.service';
import { Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {  } from '';

@Component({
  selector: 'app-user-complete-form',
  templateUrl: './user-complete-form.component.html',
  styleUrls: ['./user-complete-form.component.css']
})

export class UserCompleteFormComponent implements OnInit {

  user: User ;
  users: User[];
  //lastname: string = "Demester";
 // firstname: string = "Ghislain";

  constructor(private userService: UserService) {
 this.user={
      id : 1,
      lastname : "demester",
      firstname : "ghislain"
    }
  }

  getAllUsers() {
    this.userService.getAll().subscribe(reponse => this.users = reponse);

  }

  getUserById (){
    this.userService.get(1).subscribe(reponse => this.user = reponse);
  }

  ngOnInit() {
    this.getAllUsers();
  }


}


