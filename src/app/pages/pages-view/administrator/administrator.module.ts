
/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { AdministratorRoutingModule, routedComponents } from './administrator-routing.module';
import { ThemesModule } from '../../../themes/themes.module';
import { PagesModule} from '../../pages.module';

/**
 * Services
 */
import { UserService} from '../../../services/data/user.service';

/**
 * 
 */



@NgModule({
  imports: [
    AdministratorRoutingModule,
    ThemesModule,
    PagesModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserService
  ]
})
export class AdministratorModule { }
