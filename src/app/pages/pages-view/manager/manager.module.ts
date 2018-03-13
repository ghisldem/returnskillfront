import { NgModule } from '@angular/core';
import { ManagerRoutingModule, routedComponents } from './manager-routing.module';
import { ThemesModule } from '../../../themes/themes.module';
import {ComponentsModule} from '../../../components/components.modules';

@NgModule({
    imports: [
      ManagerRoutingModule,
      ComponentsModule,
      ThemesModule
    ],
    declarations: [
      ...routedComponents,
    ]
  })
export class ManagerModule { }
