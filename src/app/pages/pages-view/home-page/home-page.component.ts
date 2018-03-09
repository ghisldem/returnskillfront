import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  openRegisterForm() {
    const dialogRef = this.dialog.open(RegisterFormDialog, {
      height: '600px',
      width: '500px'
    });

  }
  openLoginForm() {
    const dialogRef = this.dialog.open(LoginFormDialog, {
      height: '400px',
      width: '500px'
    });

  }

  /**
   *display tab users
   */
  observavleUserList: Observable<any[]>;
  usersList: User[];
  COLUMNSTABLE: Array<[string, string]> = [
    ['id', 'Id'],
    ['firstname', 'Prénom'],
    ['lastname', 'Nom'],
    ['email', 'Email'],

    // ['phoneNumber', 'num tel']
  ];

  getUsersList() {

    this.observavleUserList = this.userService.getAll()
    this.observavleUserList.subscribe(reponse => this.usersList = reponse);
  }

}

@Component({
  selector: 'app-home-page-login-dialog',
  templateUrl: '../../_components/forms/login-form/login-form.component.html',
  styleUrls: ['../../_components/forms/login-form/login-form.component.css']
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
  templateUrl: '../../_components/forms/register-form/register-form.component.html',
  styleUrls: ['../../_components/forms/register-form/register-form.component.css']
})
export class RegisterFormDialog {


  user: User;

  name = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.email]);
  email = new FormControl('', [Validators.required, Validators.email]);
  motDePasse = new FormControl('', [Validators.required, Validators.email]);
  confMotDePasse = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router, private userService: UserService) {

    this.user = new User();

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