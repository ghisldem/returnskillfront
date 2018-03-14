import { NgModule } from '@angular/core';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';
import { ThemesModule } from '../../../themes/themes.module';
import {ComponentsModule} from '../../../components/components.modules';
import { SkillsComponent } from './skills/skills.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  imports: [
    AdministratorRoutingModule,
    ThemesModule,
    ComponentsModule
  ],
  declarations: [
    ...routedComponents,
    SkillsComponent,
    UsersComponent,

  ]
})
export class AdministratorModule { }
