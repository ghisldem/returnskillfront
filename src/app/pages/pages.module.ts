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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {PagesRoutingModule} from './pages-routing.module';
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
import { GenTableExampleComponent } from './_components/tables/gen-table-example/gen-table-example.component';
import {LoginFormComponent} from './_components/forms/login-form/login-form.component'


/*
 * components - pages
 */
import { PageTestComponent } from './pages-view/page-test/page-test.component';


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
    MatSlideToggleModule,
    PagesRoutingModule
  ],
  declarations: [

    /*
     * components - 
     */
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component,
    GenericTableComponent,
    GenericAutocompleteComponent,
    GenTableExampleComponent,
    LoginFormComponent,


    /*
     *pages
     */
    PageTestComponent,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component,
    GenericTableComponent,
    GenericAutocompleteComponent,
    GenTableExampleComponent
  ]
})
export class PagesModule { }
