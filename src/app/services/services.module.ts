import { NgModule } from '@angular/core';
/*
*Services
*/
import {UserService} from './data/user.service';
import {WebService} from './data/web.service';
import { StudyLevelService } from './data/study-level.service';
import { TrainingAreaService } from './data/training-area.service';
import { SkillService } from './data/skill.service';

/*
 * directives - pipes
 */
import { ChangeColorDirective } from './utils/directives/change-color.directive';
import { LoadDataDirective } from './utils/directives/load-data.directive';
import { CapitalizeFirstPipe } from './utils/pipes/capitalize-first.pipe';

@NgModule({
  imports: [

  ],

  declarations: [
    ChangeColorDirective,
    LoadDataDirective,
    CapitalizeFirstPipe
  ],

  providers: [
    WebService,
    UserService,
    StudyLevelService,
    TrainingAreaService,
    SkillService
  ],
  
  exports : [
    ChangeColorDirective,
    LoadDataDirective,
    CapitalizeFirstPipe
  ]

})
export class ServicesModule { }
