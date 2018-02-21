import { NgModule } from '@angular/core';
import {UserService} from './data/user.service';
import {WebService} from './data/web.service';
import { ChangeColorDirective } from './utils/directives/change-color.directive';
import { LoadDataDirective } from './utils/directives/load-data.directive';

@NgModule({
  imports: [

  ],

  declarations: [
    ChangeColorDirective,
    LoadDataDirective
  ],

  providers: [
    WebService,
    UserService
  ],
  
  exports : [
    ChangeColorDirective,
    LoadDataDirective
  ]

})
export class ServicesModule { }
