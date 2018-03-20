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


/**
 * component
 */
import { UserTableConfig1 } from '../../../../components/config/table/user-table-config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** actions to apply to a table de type user */
  
  userTable3Config: UserTableConfig1;



  constructor(private userService: UserService, private skillService: SkillService, public dialog: MatDialog, public snackBar: MatSnackBar) {

    this.userTable3Config = new UserTableConfig1(this.userService, this.snackBar, this.dialog);

    setInterval(() => (this.table3UpdateDataSourceUser = this.userTable3Config.updateDataSourceUser), 1000);

  }


  ngOnInit() {


    this.getSkillsList();

    this.table3COLUMNSTABLE = this.userTable3Config.COLUMNSTABLE;
    this.table3ActionsOnUser = this.userTable3Config.actionsOnUser;
    this.table3ActionsOnListUsers = this.userTable3Config.actionsOnListUsers;
    this.table3TitleTableUser = this.userTable3Config.titleTableUser;
    this.table3ObservavleUserList = this.userTable3Config.observavleUserList;
    this.table3UsersList = this.userTable3Config.usersList;
    this.table3UpdateDataSourceUser = this.userTable3Config.updateDataSourceUser;


  }

  /**
   * display table 3 users
   */
  table3ActionsOnUser: Action[];
  table3ActionsOnListUsers: Action[];
  table3TitleTableUser: string = 'Liste des collaborateurs';
  table3ObservavleUserList: Observable<any[]>;
  table3UsersList: User[];
  table3COLUMNSTABLE: Array<[string, string]>;
  table3UpdateDataSourceUser: boolean = false;




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



