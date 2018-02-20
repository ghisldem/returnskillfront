import { NgModule } from '@angular/core';

import{ServicesModule} from '../services/services.module';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
/*
 * services
 */
import {UserService} from '../services/data/user.service';
import{UserComponent} from './user/user.component';



@NgModule({
  imports: [
    ServicesModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent
  ]
})
export class PagesModule { }
