import { Injectable, Inject, Component } from '@angular/core';
import { User, UserComplete } from '../../models/user';
import { WebService } from './web.service';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { deserialize } from 'json-typescript-mapper';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';
import { Action } from '../../models/features/action';


@Injectable()
export class UserService {

  users: Array<User>; //mock (fausses données  pour test)
  page: number = 0;
  size: number = 100;


  constructor(private webService: WebService) {

  }


  /** mapping response object in user*/
  mapArrayOfObjectToUser2(a: Object[]): User[] {
    let r: User[] = [];
    a.forEach(element => {
      let u: User = new User();
      u = deserialize(User, element);
      r.push(u);
    });
    return r;
  }

  getUserCompleteAll(): Observable<UserComplete[]> {
    return this.webService.getAll("users/complete?page=" + this.page + "&size=" + this.size).map(r => r.content);
  }

  getAll(): Observable<User[]> {
    return this.webService.getAll("users?page=" + this.page + "&size=" + this.size).map(r => this.mapArrayOfObjectToUser2(r.content));
  }

  get(id: number): Observable<User> {
    return this.webService.get("users", id);
  }

  create(user: User): Observable<User> {
    return this.webService.create("users/", user);
  }

  delete(): void { }

  update(user: User): Observable<User> {
    let id: number = user.id;
    return this.webService.update("users/" + id, user);
  }



}


@Injectable()
export abstract class UserTableConfig {

  observavleUserList: Observable<User[]>;
  usersList: User[];
  updateDataSourceUser: boolean = false;

  constructor(public userService: UserService, public snackBar: MatSnackBar, public dialog: MatDialog) {

  }

  NgOnInit() {
    this.getUsersList();
  }

  /**
  * definition actions on user
  */

  addUserFromTable() {
    let user: User = new User();
    let userResult: User;


    this.openModificationUserForm(user).subscribe(result => {
      userResult = result;


      if (user.compareBeforeCreate(userResult)) {

        this.userService.create(userResult).subscribe(

          userIdentified => {
            Object.assign(user, userIdentified);

            this.usersList.push(user);

            this.updateDataSourceUser = true;
           
            setTimeout(() => {
            this.updateDataSourceUser = false
            }, 3000);

          },
          /**handler error */
          error => {
            let message = 'collaborateur non sauvegardé';
            this.snackBar.open(message, null, {
              duration: 5000, panelClass: "snackbar-error",
            });
          },
          /**handler success */
          () => {
            let message = 'collaborateur sauvegardé';
            this.snackBar.open(message, null, {
              duration: 5000, panelClass: "snackbar-success",
            });
          }
        );
      };

    });
  }


  editUserFromTable(user: User) {

    let userCopy = Object.assign({}, user);
    let userResult: User;

    this.openModificationUserForm(userCopy).subscribe(
      result => {

        userResult = result;

        if (user.compareBeforeUpdate(userResult)) {
          
          this.userService.update(userResult).subscribe(

            userIdentified => { Object.assign(user, userIdentified); },

            /**handler error */
            error => {
              let message = 'collaborateur non sauvegardé';
              this.snackBar.open(message, null, {
                duration: 5000, panelClass: "snackbar-error",
              });
            },
            /**handler success */
            () => {
              let message = 'collaborateur sauvegardé';
              this.snackBar.open(message, null, {
                duration: 5000, panelClass: "snackbar-success",
              });
            }

          );
        }
      });
  }





  /**
   * dialog modify user
   */

  openModificationUserForm(user: User): Observable<User> {

    let userResult: User = new User();
    /**create dialog, transmit component linked, configuration of box dialog and open the box dialog */
    const dialogRef = this.dialog.open(ModificationUserFormComponent, {

      /** configuration of modal settings */
      height: '500px',
      width: '500px',
      data: { user: user },
      hasBackdrop: true,
      disableClose: true,

    });

    /** return observable */
    return dialogRef.afterClosed();

  }





  getUsersList() {

    this.observavleUserList = this.userService.getAll();
    this.observavleUserList.subscribe(reponse => this.usersList = reponse);
  }

}



export class UserTableConfig1 extends UserTableConfig {


  titleTableUser: string = 'Liste des collaborateurs';
  observavleUserList: Observable<any[]>;
  usersList: User[];
  COLUMNSTABLE: Array<[string, string]> = [
    ['id', 'Id'],
    ['firstname', 'Prénom'],
    ['lastname', 'Nom'],

  ];
  actionsOnUser : Action[];
  actionsOnListUsers :  Action [];


  constructor(public userService: UserService, public snackBar: MatSnackBar, public dialog: MatDialog){
    super(userService,snackBar,dialog)

    const that = this;
    this.actionsOnUser = [
      { tag: 'edit', icon: 'pencil', control: function (user) { that.editUserFromTable(user); } }
      { tag: 'edit', icon: 'trash', control: function (user) { that.editUserFromTable(user); } }
    ];
  
    this.actionsOnListUsers = [
      { tag: 'edit', icon: 'plus-square', control: function (user) { that.addUserFromTable(); } }
    ];


  }



}



@Component({
  templateUrl: '../../components/dialogs/user/modification-user/modif-user-dialog.html',
  styleUrls: ['../../components/dialogs/user/modification-user/modif-user-dialog.css']
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

    if (this.dialogRef) {
      this.dialogRef.close(this.userEmpty);
    }
  }

}

