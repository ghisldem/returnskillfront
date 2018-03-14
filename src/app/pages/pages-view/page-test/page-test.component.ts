import { Component, OnInit } from '@angular/core';
/*
 * components
 */
import { } from '../../_components/forms/login-form';
import {Observable} from "rxjs/Observable";

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
import { Skill } from '../../../models/Skill';
import { SkillService } from '../../../services/data/skill.service';



@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})




export class PageTestComponent implements OnInit {


  constructor( private userService: UserService, private studyLevelService: StudyLevelService,
              private trainingAreaService : TrainingAreaService, private skillService : SkillService) { }

  ngOnInit() {
    this.getUsersList();
    this.getStudyLevelList();
    this.getTrainingAreaList();
    this.getSkillList();
  }




  /*
   *display tab users
   */
  observavleUserList : Observable<any[]>;
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

  /*
   *display skills
   */
  observavleSkillsList  : Observable<any[]>;
  skillList: Skill[];
  getSkillList() {
    this.observavleSkillsList = this.skillService.getAll();
    this.observavleSkillsList.subscribe(reponse => this.skillList = reponse);
  }




}

class TableUser {

  constructor(private userService: UserService) {

  }

}