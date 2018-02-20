import { NgModule } from '@angular/core';
import {UserService} from './data/user.service';
import {WebService} from './data/web.service';

@NgModule({
  imports: [

  ],
  declarations: [

  ],
  providers: [
    WebService,
    UserService
  ],
})
export class ServicesModule { }
