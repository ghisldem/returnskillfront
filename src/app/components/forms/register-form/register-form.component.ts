import { EqualValidatorDirective } from './../../../services/utils/directives/equal-validator.directive';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, Validator } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';
import { DISABLED } from '@angular/forms/src/model';

 
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: User;
  wrongPasswordMessage : String;
  passwordValue : String;
  confirmPasswordValue : String;
  passwordMessageError : String = '';

  name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  firstname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
 matchPassword =  new FormControl('', [Validators.required]); 

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
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.password.hasError('password') ? 'Entrez un mot de passe valide' :
        '';

  }
  getErrorMessageConfirmPassword() {
    return this.confirmPassword.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.confirmPassword.hasError('confirmPassword') ? 'Confirmer votre mot de passe' :
      
        '';

  }

  getErrorMessagematchPassword() {
    return this.matchPassword.hasError('required') ? 'Vos mots de passes ne corresponde pas' :
      this.matchPassword.hasError('matchPassword') ? 'Retaper votre mot de passe' :
    
        '';
    
  }

 



  saveUser() {
    
    this.user.firstname = this.firstname.value;
    this.user.email = this.email.value;
    this.user.lastname = this.name.value;
    this.userService.create(this.user).subscribe(userIdentified => this.user = userIdentified);

  }

  controlPassword(){
    
    this.passwordValue = this.password.value; 
    this.confirmPasswordValue = this.confirmPassword.value 
    if( this.passwordValue !=  this.confirmPasswordValue) {
      this.passwordMessageError = "Les deux mots de passe de sont pas identique, recommencer!";
      console.log('PAS IDENTIQUE');

    } else {
      this.passwordMessageError = "";
    }
  }


}
