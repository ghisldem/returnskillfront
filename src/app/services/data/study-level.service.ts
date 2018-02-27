import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { StudyLevel } from '../../models/study-level';

@Injectable()
export class StudyLevelService {

listStudyLevel :  Array<StudyLevel>;

  constructor(private webService :  WebService ) {

    this.listStudyLevel = new Array<StudyLevel>();
    this.listStudyLevel.push({levelDescription : "bac ou équivalent"});
    this.listStudyLevel.push({levelDescription : "bac+1 ou équivalent"});
    this.listStudyLevel.push({levelDescription : "bac+2 ou équivalent"});
    this.listStudyLevel.push({levelDescription : "bac+3 ou équivalent"});
    this.listStudyLevel.push({levelDescription : "bac+4 ou équivalent"});
    this.listStudyLevel.push({levelDescription : "bac+5 ou équivalent"});
    
   }

   getAll(){
     return this.listStudyLevel;
   }

}
