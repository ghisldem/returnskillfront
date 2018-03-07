import { Injectable } from '@angular/core';
import { TrainingArea } from '../../models/training-area';
import { WebService } from './web.service';

@Injectable()
export class TrainingAreaService {
listTrainingArea :  Array<TrainingArea>;

  constructor(private webSevice : WebService) {
    this.listTrainingArea= new Array<TrainingArea>();

    this.listTrainingArea.push({areaDescription : "Informatique"});
    this.listTrainingArea.push({areaDescription : "Sciences"});
    this.listTrainingArea.push({areaDescription : "Gestion"});
    this.listTrainingArea.push({areaDescription : "Langues"});
    this.listTrainingArea.push({areaDescription : "Commerce"});
   }

   getAll(){
     return this.listTrainingArea;
   }

}
