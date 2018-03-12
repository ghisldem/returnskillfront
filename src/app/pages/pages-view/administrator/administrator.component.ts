import { Component } from '@angular/core';

@Component({
  selector: 'administrator-pages',
  template: `
    <div class="container"> 
    <app-menu class="element"></app-menu>
    <div class="element">
    <router-outlet></router-outlet>
    </div>
    </div>
  `,
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {
}