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
import {ExperienceFormComponent} from './forms/experience-form/experience-form.component';
import {GenericAutocompleteComponent} from './forms/generic-autocomplete/generic-autocomplete.component';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {RegisterFormComponent} from './forms/register-form/register-form.component';
import {SkillFormComponent} from './forms/skill-form/skill-form.component';
import {TrainingFormComponent} from './forms/training-form/training-form.component';
import {UserCompleteFormComponent} from './forms/user-complete-form/user-complete-form.component';
import {} from './forms';
import {} from './forms';
import {} from './forms';
import {} from './forms';
import {GenericTableComponent} from './generic-table/generic-table.component';

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
         * components
         */
        ExperienceFormComponent,
        GenericAutocompleteComponent,
        LoginFormComponent,
        RegisterFormComponent,
        SkillFormComponent,
        TrainingFormComponent,
        UserCompleteFormComponent,
        GenericTableComponent,
    ],
    providers: [
        UserService
    ],

    exports: [
        ExperienceFormComponent,
        GenericTableComponent,
        LoginFormComponent,
        RegisterFormComponent,
        SkillFormComponent,
        TrainingFormComponent,
        UserCompleteFormComponent,
        MaterialModule,
    ]
})
export class ComponentsModule { }
