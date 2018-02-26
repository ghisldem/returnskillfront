import { NgModule } from '@angular/core';
import {UserService} from './data/user.service';
import {WebService} from './data/web.service';
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
    UserService
  ],
  
  exports : [
    ChangeColorDirective,
    LoadDataDirective,
    CapitalizeFirstPipe
  ]

})
export class ServicesModule { }
