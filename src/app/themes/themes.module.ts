import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
/*
 * Modules material/animation/font
 */

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from '../components/material.module';

/*
 * components
 */
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    AngularFontAwesomeModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  providers: [

  ],
  exports : [
    FooterComponent,
    HeaderComponent,
    MenuComponent

  ]
})
export class ThemesModule { }
