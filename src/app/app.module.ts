
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
/*
 * components
 */
import { AppComponent } from './app.component';
//import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    PagesModule,
    FormsModule,
    CommonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
