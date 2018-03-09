
/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';
import { ThemesModule } from '../../../themes/themes.module';


/**
 * Services
 */
import { UserService} from '../../../services/data/user.service';


@NgModule({
  imports: [
    /**
     * modules
     */
    AdministratorRoutingModule,
    ThemesModule,

  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserService
  ]
})
export class AdministratorModule { }
