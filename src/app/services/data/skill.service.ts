import { Skill } from '../../models/Skill';

import { Injectable } from '@angular/core';


@Injectable()
export class SkillService {

listSkill : Array<Skill>;

constructor() {
  this.listSkill =  new Array<Skill>();
  this.listSkill.push({id:1,tag: "java", description: "connaissance théorique et pratique de java(se)",type : "TS"});
  this.listSkill.push({id:2,tag: "java JEE", description: "connaissance théorique et pratique de java(EE)",type : "TS"});
  this.listSkill.push({id:3,tag: "Anglais", description: "parler anglais",type : "LS"});
  this.listSkill.push({id:4,tag: "Espagnol", description: "parler Espagnol",type : "LS"});
 }

 getAll(){
   return this.listSkill;
 }



}
