import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageTestComponent } from './pages-view/page-test/page-test.component'


const routes: Routes = [{
  path: '',
  // component: PagesComponent,
  children: [{
    path: 'test',
    component: PageTestComponent
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {

}