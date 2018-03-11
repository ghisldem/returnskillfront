import { Component, OnInit } from '@angular/core';
//import { MaterialModule } from './../../../material.module';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
 
  
  constructor(private router: Router) { 
  }

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

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Vous devez renseigner ce champs' :
        this.email.hasError('email') ? 'Entrez un Email valide' :
            '';

  }
  

}
