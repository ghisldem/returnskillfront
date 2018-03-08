import { NgModule } from '@angular/core';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';

@NgModule({
  imports: [
    AdministratorRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class AdministratorModule { }
