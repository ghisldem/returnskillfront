import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultingComponent } from '../consulting/consulting.component';

/**
 * sub pages
 */
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'training',
    component: TrainingComponent,
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
export class ConsultingRoutingModule {

}

export const routedComponents = [
    ConsultingComponent,
    HomeComponent,
    TrainingComponent,
];