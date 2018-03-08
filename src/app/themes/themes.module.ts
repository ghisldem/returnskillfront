import { NgModule } from '@angular/core';

/*
 * components
 */
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [

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
