import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

/*
 * Modules material/animation/font
 */

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from '../pages/material.module';

/*
 * components
 */
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    AngularFontAwesomeModule,
    MaterialModule

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
