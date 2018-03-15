import { environment } from './../environments/environment';
//import { NGXLogger } from 'ngx-logger';

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
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';


/*
 * components
 */
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PagesModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
