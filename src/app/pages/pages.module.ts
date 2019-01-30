import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages.routes';

import { TournamentComponent } from './tournament/tournament.component';


const MATERIAL_PAGES_MODULES = [
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatTreeModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        ComponentsModule,
        MATERIAL_PAGES_MODULES,
    ],
    exports: [
        ComponentsModule,
        MATERIAL_PAGES_MODULES,
        TournamentComponent,
    ],
    declarations: [
        TournamentComponent,
    ],
    entryComponents: [
        TournamentComponent,
    ],
    providers: [

    ]
})

export class PagesModule { }

