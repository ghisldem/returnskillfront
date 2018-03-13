import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';
import { empty } from 'rxjs/observable/empty';
import { EmptyError } from 'rxjs';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { isEmpty } from 'rxjs/operator/isEmpty';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: User;


  name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  firstname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  email = new FormControl('',Validators.compose([Validators.required, Validators.email, 
    Validators.pattern('/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/')]));
  motDePasse = new FormControl('', [Validators.required]);
  confMotDePasse = new FormControl('', [Validators.required]);

  constructor(private router: Router, private userService : UserService) { 
    this.user= new User();
  }

  ngOnInit() {
  }

  getErrorMessageName() {
    return this.name.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.name.hasError('name') ? 'Entrez un nom valide' :
        '';
  }

  getErrorMessageFirstname() {
    return this.firstname.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.firstname.hasError('firstname') ? 'Entrez un prénom valide' :
        '';

  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.email.hasError('email') ? 'Entrez un Email valide' :
        '';

  }
  getErrorMessageMotDePasse() {
    return this.motDePasse.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.motDePasse.hasError('motDePasse') ? 'Entrez un mot de passe valide' :
        '';

  }
  getErrorMessageConfMotDePasse() {
    return this.confMotDePasse.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.confMotDePasse.hasError('confMotDePasse') ? 'Confirmer votre mot de passe' :
        '';

  }


  saveUser() {
    
    this.user.firstname = this.firstname.value;
    this.user.email = this.email.value;
    this.user.lastname = this.motDePasse.value;
    this.user.lastname = this.name.value;
    this.userService.create(this.user).subscribe(userIdentified => this.user = userIdentified);
  }

  

  

}
