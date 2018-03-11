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
        GenericTableComponent,
    ],
    providers: [
        UserService
    ],

    exports: [
        ExperienceFormComponent,
        GenericTableComponent,
        MaterialModule,
    ]
})
export class ComponentsModule { }
