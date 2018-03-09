import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

/*
 * components
 */
import {FooterComponent} from './footer/footer.component'
import {HeaderComponent} from './header/header.component'


@NgModule({
  imports: [
    AngularFontAwesomeModule

  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [

  ],
  exports : [
    FooterComponent,
    HeaderComponent

  ]
})
export class ThemesModule { }
