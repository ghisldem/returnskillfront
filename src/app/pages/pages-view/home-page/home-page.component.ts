import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openRegisterForm() {
    const dialogRef = this.dialog.open(RegisterFormDialog, {
      height: '600px',
      width: '500px'
    });

  }
  openLoginForm() {
    const dialogRef = this.dialog.open(LoginFormDialog, {
      height: '500px',
      width: '480px'
    });

  }

}

@Component({
  selector: 'app-home-page-login-dialog',
  templateUrl: '../../../components/forms/login-form/login-form.component.html',
  styleUrls: ['../../../components/forms/login-form/login-form.component.css']
})
export class LoginFormDialog {
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


@Component({
  selector: 'app-home-page-register-dialog',
  templateUrl: '../../../components/forms/register-form/register-form.component.html',
  styleUrls:['../../../components/forms/register-form/register-form.component.css']
})
export class RegisterFormDialog {
  passwordValue : String;
  confirmPasswordValue : String;
  wrongPasswordMessage : String;
  passwordMessageError : String = '';
  user: User;

  name =  new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  firstname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  email = new FormControl('',[Validators.required, Validators.email]); 
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  matchPassword =  new FormControl('', [Validators.required]); 

  constructor(private router: Router, private userService: UserService) { 

    this.user = new User(); 
  
  }


  ngOnInit() {

   
  }

  getErrorMessageName(){
    return this.name.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.name.hasError('name') ? 'Entrez un nom valide' :
        '';
  }

 getErrorMessageFirstname(){
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
      this.password.hasError('motDePasse') ? 'Entrez un mot de passe valide' :
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

    } else {
      this.passwordMessageError = "";
    }
  }


  
}