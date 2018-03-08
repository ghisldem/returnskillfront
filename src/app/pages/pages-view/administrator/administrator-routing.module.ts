import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorComponent } from '../administrator/administrator.component';

/**
 * sub pages
 */
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: AdministratorComponent,
            children: [{
              path: 'home',
              component: HomeComponent,
            }, 
            {
              path: '',
              redirectTo: 'home',
              pathMatch: 'full',
            }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AdministratorRoutingModule {

}

export const routedComponents = [
    AdministratorComponent,
    HomeComponent,
];