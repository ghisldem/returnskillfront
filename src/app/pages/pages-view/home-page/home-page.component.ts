import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
      height: '350px'
    });

  }
  openLoginForm() {
    const dialogRef = this.dialog.open(LoginFormDialog, {
      height: '350px'
    });

  }



}

@Component({
  selector: 'app-home-page-login-dialog',
  templateUrl: '../../_components/forms/login-form/login-form.component.html',
})
export class LoginFormDialog {
}


@Component({
  selector: 'app-home-page-register-dialog',
  templateUrl: '../../_components/forms/login-form/login-form.component.html',
})
export class RegisterFormDialog {
}