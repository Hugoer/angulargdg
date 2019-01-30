import { NgModule } from '@angular/core';
import {
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
} from '@angular/material';

import { ConfirmDialogComponent } from './confirm/confirm.component';
import { HeroeVillainComponent } from './heroe-villain/heroe-villain.component';
import { SharedModule } from '../shared/shared.module';

const MATERIAL_COMPONENTS_MODULES = [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
];

@NgModule({
    imports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
    ],
    declarations: [
        ConfirmDialogComponent,
        HeroeVillainComponent,
    ],
    entryComponents: [
        ConfirmDialogComponent,
        HeroeVillainComponent,
    ],
    exports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
        ConfirmDialogComponent,
        HeroeVillainComponent,
    ]
})
export class ComponentsModule { }
