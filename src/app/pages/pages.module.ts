/*
 * Modules
 */
import { NgModule } from '@angular/core';
import { ServicesModule } from '../services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
/*
 * services
 */
import { UserService } from '../services/data/user.service';

/*
 * components
 */
import { UserCompleteFormComponent } from './_components/forms/user-complete-form/user-complete-form.component';
import { UserComponent } from './user/user.component';
import { UsersTable1Component } from './_components/tables/users-table1/users-table1.component';
import { GenericTableComponent } from './_components/tables/generic-table/generic-table.component';
import { GenericAutocompleteComponent } from './_components/forms/generic-autocomplete/generic-autocomplete.component';


@NgModule({
  imports: [
    ServicesModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  declarations: [
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component,
    GenericTableComponent,
    GenericAutocompleteComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component,
    GenericTableComponent,
    GenericAutocompleteComponent
  ]
})
export class PagesModule { }
