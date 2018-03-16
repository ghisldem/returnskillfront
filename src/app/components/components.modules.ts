import { ConsoleLoggerService } from './../services/data/console-logger.service';
import { LoggerService } from './../services/data/logger.service';
/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ThemesModule } from '../themes/themes.module';
import { ServicesModule } from '../services/services.module';

import { MaterialModule } from './material.module';

/**
 * Modules material/animation/font
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/**
 * services
 */
import { UserService } from '../services/data/user.service';

/**
 * components
 */
import { ExperienceFormComponent } from './forms/experience-form/experience-form.component';
import { GenericAutocompleteComponent } from './forms/generic-autocomplete/generic-autocomplete.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { SkillFormComponent } from './forms/skill-form/skill-form.component';
import { TrainingFormComponent } from './forms/training-form/training-form.component';
import { UserCompleteFormComponent } from './forms/user-complete-form/user-complete-form.component';
import { } from './forms';
import { } from './forms';
import { } from './forms';
import { } from './forms';
import { GenericTableComponent } from './tables/generic-table/generic-table.component';



@NgModule({
    imports: [
        /**
         * modules @angular
         */
        ServicesModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ThemesModule,
        MaterialModule,
        AngularFontAwesomeModule,
    ],

    declarations: [

        /**
         * components - forms
         */
        ExperienceFormComponent,
        GenericAutocompleteComponent,
        LoginFormComponent,
        RegisterFormComponent,
        SkillFormComponent,
        TrainingFormComponent,
        UserCompleteFormComponent,

        /**
         * components - tables
         */
        GenericTableComponent,

        
    ],
    providers: [
        UserService,
        { provide: LoggerService, useClass: ConsoleLoggerService }
    ],

    exports: [
        ExperienceFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        SkillFormComponent,
        TrainingFormComponent,
        UserCompleteFormComponent,
        GenericTableComponent,
        MaterialModule,
    ]
})
export class ComponentsModule { }
