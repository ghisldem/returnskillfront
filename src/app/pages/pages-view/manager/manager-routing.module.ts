import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from '../manager/manager.component';

/**
 * sub pages
 */
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: ManagerComponent,
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
export class ManagerRoutingModule {

}

export const routedComponents = [
    ManagerComponent,
    HomeComponent,
];