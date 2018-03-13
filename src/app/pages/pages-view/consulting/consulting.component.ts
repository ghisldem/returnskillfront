import { Component } from '@angular/core';
import {MENU_CONSULTING} from './consulting-menu'

@Component({
  selector: 'consulting-pages',
  template: `
  <div class="container"> 

    <app-menu [menuItems] = "menuConsulting" class="element"></app-menu>

    <div class="element">
    <router-outlet></router-outlet>
    </div>

  </div>
`,
styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent {
  menuConsulting = MENU_CONSULTING;
}