import { NgModule } from '@angular/core';

/*
 * Modules material/animation/font
 */

import { AngularFontAwesomeModule } from 'angular-font-awesome';

/*
 * components
 */
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    AngularFontAwesomeModule,

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
