/*
 * Modules
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemesModule } from '../themes/themes.module';
import { ServicesModule } from '../services/services.module';
import {ConsultingModule} from './pages-view/consulting/consulting.module';

import { MaterialModule } from './material.module';

/*
 * Modules material/animation/font
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/*
 * services
 */
import { UserService } from '../services/data/user.service';

/*
 * components
 */
import { PagesComponent } from './pages.component';
import { UserCompleteFormComponent } from './_components/forms/user-complete-form/user-complete-form.component';
import { UserComponent } from './user/user.component';
import { UsersTable1Component } from './_components/tables/users-table1/users-table1.component';
import { GenericTableComponent } from './_components/tables/generic-table/generic-table.component';
import { GenericAutocompleteComponent } from './_components/forms/generic-autocomplete/generic-autocomplete.component';
import { GenTableExampleComponent } from './_components/tables/gen-table-example/gen-table-example.component';
import { LoginFormComponent } from './_components/forms/login-form/login-form.component';
import { TestViewComponent } from './_components/test/test-view/test-view.component';
import { SkillFormComponent } from './_components/forms/skill-form/skill-form.component';
import { TrainingFormComponent } from './_components/forms/training-form/training-form.component';
import { ExperienceFormComponent } from './_components/forms/experience-form/experience-form.component';

/*
 * components - pages
 */
import { PageTestComponent } from './pages-view/page-test/page-test.component';
import { HomePageComponent, LoginFormDialog, RegisterFormDialog } from './pages-view/home-page/home-page.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

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
    AngularFontAwesomeModule,
/**
 * modules pages
 */
    ConsultingModule,
  ],

  declarations: [
    ...PAGES_COMPONENTS,
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
    SkillFormComponent,
    ExperienceFormComponent,
    TrainingFormComponent,



    /*
     *pages
     */
    PageTestComponent,
    HomePageComponent,

    /**
     * dialogs
     */
    LoginFormDialog,
    RegisterFormDialog,

  ],
  providers: [
    UserService
  ],
  entryComponents: [
    LoginFormDialog, HomePageComponent, RegisterFormDialog
  ],
  exports: [

  ]
})
export class PagesModule { }
