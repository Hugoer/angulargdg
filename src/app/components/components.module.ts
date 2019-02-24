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
    MatSlideToggleModule,
} from '@angular/material';

import { SharedModule } from '@app/shared/shared.module';
import { ConfirmDialogComponent } from './confirm/confirm.component';
import { HeroeVillainComponent } from './heroe-villain/heroe-villain.component';
import { UserComponent } from './user/user.component';
import { TournamentHeroListComponent } from './tournament-hero-list/tournament-hero-list.component';
import { TournamentVillainListComponent } from './tournament-villain-list/tournament-villain-list.component';

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
    MatSlideToggleModule,
];

@NgModule({
    imports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
    ],
    declarations: [
        ConfirmDialogComponent,
        HeroeVillainComponent,
        TournamentHeroListComponent,
        UserComponent,
        TournamentVillainListComponent,
    ],
    entryComponents: [
        ConfirmDialogComponent,
        HeroeVillainComponent,
        TournamentHeroListComponent,
        UserComponent,
    ],
    exports: [
        MATERIAL_COMPONENTS_MODULES,
        SharedModule,
        ConfirmDialogComponent,
        HeroeVillainComponent,
        TournamentHeroListComponent,
        UserComponent,
    ]
})
export class ComponentsModule { }
