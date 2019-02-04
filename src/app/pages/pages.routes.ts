import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from '@app/pages/tournament/tournament.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'tournament.title'
        }
    },
    {
        path: 'tournament/:id',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'tournament.title'
        }
    }, {
        path: 'profile/:id',
        component: ProfileComponent,
        data: {
            showNavbarMenu: false,
            pageTitle: 'profile.title'
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
