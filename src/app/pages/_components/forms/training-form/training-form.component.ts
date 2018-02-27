import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, NgModel } from '@angular/forms';
import { StudyLevel } from '../../../../models/study-level';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { TrainingArea } from '../../../../models/training-area';
import { Skill } from '../../../../models/Skill';
import { MatChipInputEvent, MatInput } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent implements OnInit {

  constructor() {

    this.studyLevelControl = new FormControl();
    this.filteredStudyLevel = this.studyLevelControl.valueChanges
      .pipe(
        startWith(''),
        map(studyLevel => studyLevel ? this.filterStudyLevel(studyLevel) : this.studyLevelList.slice())
      );

    this.trainingAreaControl = new FormControl();
    this.filteredTrainingArea = this.trainingAreaControl.valueChanges
      .pipe(
        startWith(''),
        map(trainingArea => trainingArea ? this.filterTrainingArea(trainingArea) : this.trainingAreaList.slice())
      );

    // this.skillControl = new FormControl();
    // this.filteredSkill = this.skillControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(skill => skill ? this.filterTrainingArea(skill) : this.skillList.slice())
    //   );

    // this.retainedSkills = new Array<Skill>();
  }

  ngOnInit() {
  }

  /*
   * radiobox (option)  training type
   */

  trainingType: number = 1;


  /*
   * input Autocomplete study level 
   */

  @Input() studyLevelList: StudyLevel[];
  studyLevelControl: FormControl;
  filteredStudyLevel: Observable<any[]>;

  filterStudyLevel(name: string) {
    return this.studyLevelList.filter(studyLevel =>
      studyLevel.levelDescription.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  /*
   * input Autocomplete training aera
   */

  @Input() trainingAreaList: TrainingArea[];
  trainingAreaControl: FormControl;
  filteredTrainingArea: Observable<any[]>;

  filterTrainingArea(name: string) {
    return this.trainingAreaList.filter(trainingArea =>
      trainingArea.areaDescription.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  /*
   * input Autocomplete skill
   */
  @Input() skillList: Skill[];

}
