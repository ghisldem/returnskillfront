import { NgModule } from '@angular/core';
/**
*Services-data
*/
import {UserService} from './data/user.service';
import {WebService} from './data/web.service';
import { StudyLevelService } from './data/study-level.service';
import { TrainingAreaService } from './data/training-area.service';
import { SkillService } from './data/skill.service';

/**
*Services-actions
*/
import {ActionsUserService} from './actions/actions-user.service'

/*
 * directives - pipes
 */
import { ChangeColorDirective } from './utils/directives/change-color.directive';
import { LoadDataDirective } from './utils/directives/load-data.directive';
import { CapitalizeFirstPipe } from './utils/pipes/capitalize-first.pipe';
import { AddSearchBarDirective } from './utils/directives/add-search-bar.directive';
import { EqualValidatorDirective} from './utils/directives/equal-validator.directive';

@NgModule({
  imports: [

  ],

  declarations: [
    ChangeColorDirective,
    LoadDataDirective,
    CapitalizeFirstPipe,
    AddSearchBarDirective,
    EqualValidatorDirective
  ],

  providers: [
    /**
     * services data
     */
    WebService,
    UserService,
    StudyLevelService,
    TrainingAreaService,
    SkillService,

    /**
     * service actions
     */
    ActionsUserService
  ],
  
  exports : [
    ChangeColorDirective,
    LoadDataDirective,
    CapitalizeFirstPipe,
    EqualValidatorDirective,
  ]

})
export class ServicesModule { }
