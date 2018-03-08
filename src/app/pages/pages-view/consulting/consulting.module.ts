import { NgModule } from '@angular/core';

import { ConsultingRoutingModule, routedComponents } from './consulting-routing.module';

@NgModule({
  imports: [
    ConsultingRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class ConsultingModule { }
