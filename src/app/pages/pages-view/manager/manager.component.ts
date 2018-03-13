import { Component } from '@angular/core';
import { MENU_MANAGER } from './manager-menu';

@Component({
  selector: 'manager-pages',
  template: `
  <div class="container"> 

    <app-menu [menuItems] = "menuManager" class="element"></app-menu>

    <div class="element">
    <router-outlet></router-outlet>
    </div>

  </div>
`,
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  menuManager = MENU_MANAGER;
}