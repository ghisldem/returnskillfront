
/*
 * Modules
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemesModule } from '../themes/themes.module';
import { ServicesModule } from '../services/services.module';

import { MaterialModule } from './material.module';
import { ComponentsModule } from '../components/components.modules';

/*
 * Modules material/animation/font
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

/**
 * Modules - pages
 */

import { ConsultingModule } from './pages-view/consulting/consulting.module';
import { ManagerModule } from './pages-view/manager/manager.module';
import { AdministratorModule } from './pages-view/administrator/administrator.module';

/*
 * services
 */
import { UserService } from '../services/data/user.service';

/*
 * components
 */
import { PagesComponent } from './pages.component';

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
    ManagerModule,
    AdministratorModule,
    ComponentsModule,
  ],

  declarations: [
    ...PAGES_COMPONENTS,

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
    MaterialModule,
  ]
})
export class PagesModule { }
