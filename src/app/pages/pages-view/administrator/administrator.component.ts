import { Component } from '@angular/core';
import {MENU_ADMINISTRATOR} from './administrator-menu';

@Component({
  selector: 'app-administrator-pages',
  template: `
    <div class="container"> 

      <app-menu [menuItems] = "menuAdministrator" class="element"></app-menu>

      <div class="element">
      <router-outlet></router-outlet>
      </div>

    </div>
  `,
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  menuAdministrator = MENU_ADMINISTRATOR;
}