/*
 * Modules
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemesModule } from '../themes/themes.module'
import { ServicesModule } from '../services/services.module';

import {MaterialModule} from './material.module'

/*
 * Modules material/animation/font
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFontAwesomeModule } from 'angular-font-awesome';


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
import { LoginFormComponent } from './_components/forms/login-form/login-form.component';
import { TestViewComponent } from './_components/test/test-view/test-view.component';


/*
 * components - pages
 */
import { PageTestComponent } from './pages-view/page-test/page-test.component';


@NgModule({
  imports: [
    /*
     * modules @angular
     */
    ServicesModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ThemesModule,
    MaterialModule,   
    AngularFontAwesomeModule
  ],

  declarations: [

    /*
     * components
     */
    UserComponent,
    UserCompleteFormComponent,
    UsersTable1Component,
    GenericTableComponent,
    GenericAutocompleteComponent,
    GenTableExampleComponent,
    LoginFormComponent,
    TestViewComponent,



    /*
     *pages
     */
    PageTestComponent,
  ],
  providers: [
    UserService
  ],
  exports: [

  ]
})
export class PagesModule { }
