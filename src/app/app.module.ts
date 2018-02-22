
/*
 * Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
/*
 * components
 */
import { AppComponent } from './app.component';
import { LoginFormComponent } from './pages/components/forms/login-form/login-form.component';
import { HeaderComponent } from './themes/header/header.component';
import { FooterComponent } from './themes/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './pages/user/user.component';
import {UsersTable1Component} from './pages/_components/tables/users-table1/users-table1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'users-table1',
    component: UsersTable1Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    // LoginFormComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    PagesModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes),
    MatInputModule,
    CommonModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
