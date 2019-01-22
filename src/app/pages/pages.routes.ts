import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from '@app/pages/tournament/tournament.component';

const routes: Routes = [
    {
        path: '',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'main.index'
        }
    },
    {
        path: 'tournament/:id',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'main.index'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
