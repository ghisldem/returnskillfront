import { Component, OnInit } from '@angular/core';
/*
 * components
 */
import { } from '../../_components/forms/login-form';

/*
 * models
 */
import { User } from '../../../models/user';

/*
 * services
 */
import { UserService } from '../../../services/data/user.service';
import { StudyLevelService } from '../../../services/data/study-level.service';
import { StudyLevel } from '../../../models/study-level';
import { TrainingArea } from '../../../models/training-area';
import { TrainingAreaService } from '../../../services/data/training-area.service';



@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})




export class PageTestComponent implements OnInit {


  constructor( private userService: UserService, private studyLevelService: StudyLevelService,
              private trainingAreaService : TrainingAreaService) { }

  ngOnInit() {
    this.getUsersList();
    this.getStudyLevelList();
    this.getTrainingAreaList()
  }


  /*
   *display tab users
   */
  usersList: User[];
  COLUMNSTABLE: Array<[string, string]> = [
    ['id', 'Id'],
    ['firstname', 'Prénom'],
    ['lastname', 'Nom'],
    ['email', 'Email'],
    // ['phoneNumber', 'num tel']
  ];

  getUsersList() {
    this.userService.getAll().subscribe(reponse => this.usersList = reponse);
  }


  /*
   *display study level
   */
  studyLevelList: StudyLevel[];
  getStudyLevelList() {
    this.studyLevelList = this.studyLevelService.getAll();
  }

  /*
   *display Training Area
   */
  trainingAreaList: TrainingArea[];
  getTrainingAreaList() {
    this.trainingAreaList = this.trainingAreaService.getAll();
  }

}

class TableUser {

  constructor(private userService: UserService) {

  }

}