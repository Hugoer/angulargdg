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

import { SharedModule } from '@app/shared/shared.module';
import { ConfirmDialogComponent } from './confirm/confirm.component';

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
    ],
    entryComponents: [
        ConfirmDialogComponent,
    ],
    exports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
        ConfirmDialogComponent,
    ]
})
export class ComponentsModule { }
