import { NgModule } from '@angular/core';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';
import { ThemesModule } from '../../../themes/themes.module';

@NgModule({
  imports: [
    AdministratorRoutingModule,
    ThemesModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class AdministratorModule { }
