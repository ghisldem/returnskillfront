import { Component } from '@angular/core';

@Component({
  selector: 'administrator-pages',
  template: `
    <div class="container"> 
    <app-menu></app-menu>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {
}