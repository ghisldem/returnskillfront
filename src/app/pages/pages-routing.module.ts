import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageTestComponent } from './pages-view/page-test/page-test.component';
import { HomePageComponent } from './pages-view/home-page/home-page.component';

const routes: Routes = [{
  path: '',
  // component: PagesComponent,
  children: [{
    path: 'test',
    component: PageTestComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'consulting',
    loadChildren: './consulting/consulting.module#ConsultingModule',
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {

}