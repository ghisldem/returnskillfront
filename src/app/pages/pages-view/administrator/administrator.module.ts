import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';
import { ThemesModule } from '../../../themes/themes.module';
import { ComponentsModule } from '../../../components/components.modules';
import { SkillsComponent } from './skills/skills.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    AdministratorRoutingModule,
    ThemesModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    ...routedComponents,
    SkillsComponent,
    UsersComponent,
   
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class AdministratorModule { }
