import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * Modules material/animation
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatPaginatorModule } from '@angular/material/paginator';


/*forms*/
import { MatSlideToggleModule, MatFormFieldModule, MatAutocompleteModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

/*buttons and indicators*/
import { MatButtonModule,MatChipsModule,MatIconModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
/*tables*/
import { MatTableModule, MatSortModule } from '@angular/material';

/*layout*/
import { MatCardModule, MatDividerModule } from '@angular/material';

/*popup modals*/
import { MatTooltipModule } from '@angular/material';


/*directives*/
import {} from '@angular/material';

@NgModule({
    imports: [

        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDividerModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSortModule
    ],
    exports: [
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDividerModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSortModule
    ]
})
export class MaterialModule { }