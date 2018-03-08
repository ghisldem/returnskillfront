import { NgModule } from '@angular/core';

import { ManagerRoutingModule, routedComponents } from './manager-routing.module';

@NgModule({
    imports: [
      ManagerRoutingModule
    ],
    declarations: [
      ...routedComponents,
    ]
  })
export class ManagerModule { }
