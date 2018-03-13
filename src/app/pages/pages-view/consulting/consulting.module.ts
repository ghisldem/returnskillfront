import { NgModule } from '@angular/core';
import { ConsultingRoutingModule, routedComponents } from './consulting-routing.module';
import { ThemesModule } from '../../../themes/themes.module';
import {ComponentsModule} from '../../../components/components.modules';

@NgModule({
  imports: [
    ConsultingRoutingModule,
    ThemesModule,
    ComponentsModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class ConsultingModule { }
