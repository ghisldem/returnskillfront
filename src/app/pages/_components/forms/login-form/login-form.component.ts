import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
  let username = e.target.elements[0].value;
  let password = e.target.elements[1].value;

  if (username === 'admin' && password === 'password') {
    this.router.navigate(['users-table1']);
  }
 
  }

}
