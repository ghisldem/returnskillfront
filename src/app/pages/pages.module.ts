/*
 * Modules
 */
import { NgModule } from '@angular/core';
import { ServicesModule } from '../services/services.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
/*
 * services
 */
import { UserService } from '../services/data/user.service';

/*
 * components
 */
import { UserCompleteFormComponent } from './components/forms/user-complete-form/user-complete-form.component';
import { UserComponent } from './user/user.component';
import { UsersTable1Component } from './components/tables/users-table1/users-table1.component';


@NgModule({
  imports: [
    ServicesModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule
  ],
  declarations: [
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component
  ]
})
export class PagesModule { }
