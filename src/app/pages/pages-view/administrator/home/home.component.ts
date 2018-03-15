import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** actions to apply to a table de type user */
  actionsOnUser: Action[];

  user : User;
  constructor(private userService: UserService, private skillService: SkillService, public dialog: MatDialog) { }

  ngOnInit() {
    const that = this;
    this.actionsOnUser = [
      { tag: 'edit', icon: 'pencil', control: function (user) { that.editUserFromTable(user); } }


    ];
    this.getUsersList();
    this.getSkillsList();



  }

  /**
   * definition actions on user
   */

  editUserFromTable(user: User) {
    this.openModificationUserForm(user)
  }

  /**
   * dialog 
   */

  openModificationUserForm(user: User) {

    /**create dialog, transmit component linked, configuration of box dialog and open the box dialog */
    const dialogRef = this.dialog.open(ModificationUserFormComponent,{

      /** configuration of modal settings */
      height: '500px',
      width: '500px',
      data: { user : user },
      hasBackdrop : true,
      disableClose :  true,

    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
      console.log(user.id);
      console.log(user.firstname);
      console.log(user.lastname);
      console.log(user.email);
    });


  }


  /*
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

    this.observavleUserList = this.userService.getAll();
    this.observavleUserList.subscribe(reponse => this.usersList = reponse);
  }

  /*
  *display tab Skills
  */
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

  userModified : User ;

  constructor(
    public dialogRef: MatDialogRef<ModificationUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log(data);
      console.log(data.user.lastname);

      this.userModified = new User();
     }


     onSubmit(){
       if (this.dialogRef){
         this.dialogRef.close(this.userModified);
         console.log(this.userModified);
         console.log("dans dialog");
         console.log(this.userModified.id);
         console.log("sortie dialog");
       }
     }

     onCancel(){
      if (this.dialogRef){
        this.dialogRef.close();
      }
     }
}