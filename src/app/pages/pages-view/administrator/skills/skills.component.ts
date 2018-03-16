import { Component, OnInit } from '@angular/core';

import { SkillService } from '../../../../services/data/skill.service';
import { Observable } from 'rxjs/observable';
import { Skill } from '../../../../models/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillService : SkillService) { }

  ngOnInit() {
    this.getSkillsList();
  }

  /*
  *display tab Skills
  */
 observavleSkillsList: Observable<any[]>;
 skillsList: Skill[];
 COLUMNSTABLE: Array<[string, string]> = [
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
