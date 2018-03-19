import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/observable';

/**
 * Models
 */
import { User } from '../../../../models/user';
import { Skill } from '../../../../models/Skill';
import { Action } from '../../../../models/features/action';


/**
 * Services
 */
import { UserService } from '../../../../services/data/user.service';
import { SkillService } from '../../../../services/data/skill.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** actions to apply to a table de type user */
  actionsOnUser: Action[];
  actionsOnListUsers: Action[];

  updateDataSourceUser : boolean = false;

  constructor(private userService: UserService, private skillService: SkillService, public dialog: MatDialog, public snackBar: MatSnackBar) { }


  ngOnInit() {
    const that = this;
    this.actionsOnUser = [
      { tag: 'edit', icon: 'pencil', control: function (user) { that.editUserFromTable(user); } }
    ];
    this.actionsOnListUsers = [
      { tag: 'edit', icon: 'plus-square', control: function (user) { that.addUserFromTable(); } }
    ]

    this.getUsersList();
    this.getSkillsList();

  }

  /**
   * definition actions on user
   */

  addUserFromTable() {
    let user: User = new User();
    let userResult: User;
    this.openModificationUserForm(user).subscribe(result => {
      userResult = result;
      console.log(user);
      console.log(userResult);

      if (user.compareBeforeCreate(userResult)) {

        this.userService.create(userResult).subscribe(

          userIdentified => { Object.assign(user, userIdentified); 

          this.usersList.push(user);

          this.updateDataSourceUser=true;
          console.log("ordre de mettre à jour" + this.updateDataSourceUser);
          setTimeout(() => {this.updateDataSourceUser=false
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
          console.log("**************on fait une mise à jour*************");
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


  /*
  *display tab users
  */
  titleTableUser: string = 'Liste des collaborateurs';
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

    this.observavleUserList = this.userService.getAll();
    this.observavleUserList.subscribe(reponse => this.usersList = reponse);
  }

  /*
  *display tab Skills
  */
  titleTableSkill: string = 'Liste des compétences';
  observavleSkillsList: Observable<any[]>;
  skillsList: Skill[];
  COLUMNSTABLESKILL: Array<[string, string]> = [
    ['id', 'Id'],
    ['tag', 'Tag'],
    ['description', 'Description'],
    ['type', 'Catégorie'],
  ];


  getSkillsList() {

    this.observavleSkillsList = this.skillService.getAll();
    this.observavleSkillsList.subscribe(reponse => this.skillsList = reponse);
  }

}





@Component({
  templateUrl: '../../../../components/dialogs/user/modification-user/modif-user-dialog.html',
  styleUrls: ['../../../../components/dialogs/user/modification-user/modif-user-dialog.css']
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