import { Skill } from '../../models/Skill';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { WebService } from './web.service';


@Injectable()
export class SkillService {

listSkill : Array<Skill>;
page : number = 0;
size : number = 10;

constructor(private webService :  WebService) {
  this.listSkill =  new Array<Skill>();
  this.listSkill.push({id:1,tag: "java", description: "connaissance théorique et pratique de java(se)",type : "TS"});
  this.listSkill.push({id:2,tag: "java JEE", description: "connaissance théorique et pratique de java(EE)",type : "TS"});
  this.listSkill.push({id:3,tag: "Anglais", description: "parler anglais",type : "LS"});
  this.listSkill.push({id:4,tag: "Espagnol", description: "parler Espagnol",type : "LS"});
 }

 getAll() :  Observable<Skill[]>{
   return this.webService.getAll("skills?page="+this.page+"&size="+this.size ).map(r => r.content);
 }



}
