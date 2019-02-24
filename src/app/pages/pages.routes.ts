import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from '@app/pages/tournament/tournament.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentHeroListComponent } from '@app/components/tournament-hero-list/tournament-hero-list.component';
import { TournamentVillainListComponent } from '@app/components/tournament-villain-list/tournament-villain-list.component';

const routes: Routes = [
    {
        path: '',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'tournament.title'
        },
        children: [
            {
                path: '',
                outlet: 'hero',
                component: TournamentHeroListComponent,
            },
            {
                path: '',
                outlet: 'villain',
                component: TournamentVillainListComponent,
            },
        ]
    },

    {
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
