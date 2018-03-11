import { NgModule } from '@angular/core';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';
import { ThemesModule } from '../../../themes/themes.module';
import {ComponentsModule} from '../../../components/components.modules';


@NgModule({
  imports: [
    AdministratorRoutingModule,
    ThemesModule,
    ComponentsModule
  ],
  declarations: [
    ...routedComponents,

  ]
})
export class AdministratorModule { }
