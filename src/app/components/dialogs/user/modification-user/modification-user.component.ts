import { Component, OnInit, Inject } from '@angular/core';
//import { MaterialModule } from './../../../material.module';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../../../models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-modification-user-dialog',
  templateUrl: './components/dialogs/user/modification-user/modif-user-dialog.html',
  styleUrls: ['./components/dialogs/user/modification-user/modif-user-dialog.css']
})

export class ModificationUserFormComponent {

  userEmpty: User = new User();


  constructor(
    public dialogRef: MatDialogRef<ModificationUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onSubmit() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.userEmpty.id = -1;

    console.log(this.userEmpty);
    if (this.dialogRef) {
      this.dialogRef.close(this.userEmpty);
    }
  }

}
