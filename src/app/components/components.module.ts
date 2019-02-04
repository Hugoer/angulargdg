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
    MatCardModule,
    MatProgressSpinnerModule,
} from '@angular/material';

import { SharedModule } from '@app/shared/shared.module';
import { ConfirmDialogComponent } from './confirm/confirm.component';
import { HeroeVillainComponent } from './heroe-villain/heroe-villain.component';
import { UserComponent } from './user/user.component';

const MATERIAL_COMPONENTS_MODULES = [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
];

@NgModule({
    imports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
    ],
    declarations: [
        ConfirmDialogComponent,
        HeroeVillainComponent,
        UserComponent,
    ],
    entryComponents: [
        ConfirmDialogComponent,
        HeroeVillainComponent,
        UserComponent,
    ],
    exports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
        ConfirmDialogComponent,
        HeroeVillainComponent,
        UserComponent,
    ]
})
export class ComponentsModule { }
