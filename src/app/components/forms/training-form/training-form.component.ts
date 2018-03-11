import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, NgModel } from '@angular/forms';
import { StudyLevel } from '../../../../models/study-level';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { TrainingArea } from '../../../../models/training-area';
import { Skill } from '../../../../models/Skill';
import { MatChipInputEvent, MatInput } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {ErrorStateMatcher} from '@angular/material/core';



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

    this.skillControl = new FormControl();
    this.filteredSkill = this.skillControl.valueChanges
      .pipe(
        startWith(''),
        map(skill => skill ? this.filterSkill(skill) : this.skillList.slice())
      );

    // this.retainedSkills = new Array<Skill>();
  }

  ngOnInit() {
  }

  /*
   * error on date value
   */
  dateFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(19|20)[0-9]{2}\/(19|20)[0-9]{2}')
  ]);

  matcher = new MyErrorStateMatcher();


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
   * chiplist skillsRetained
   */
  skillsRetained: Skill[] = [
    { id: 4, description: 'allemand', tag: 'allemand', type: 'langue' },
  ];

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    this.skillControl = new FormControl();

    // Add our skill
    if ((value || '').trim()) {
      this.skillsRetained.push({ id:null,tag: value.trim(), description:null,type : null });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    // chipList visible
    if (this.skillsRetained.length === 0) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }


  remove(skill: any): void {
    let index = this.skillsRetained.indexOf(skill);

    if (index >= 0) {
      this.skillsRetained.splice(index, 1);
    }
    // chipList visible
    if (this.skillsRetained.length === 0) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }




  /*
   * input Autocomplete skill
   */
  @Input() skillList: Skill[];
  skillControl: FormControl;
  filteredSkill: Observable<any[]>;

  filterSkill(name: string) {
    return this.skillList.filter(skill =>
      skill.tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}