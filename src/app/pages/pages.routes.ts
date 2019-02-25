import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from '@app/pages/tournament/tournament.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentHeroListComponent } from '@app/components/tournament-hero-list/tournament-hero-list.component';
import { TournamentVillainListComponent } from '@app/components/tournament-villain-list/tournament-villain-list.component';
import { HeroeVillainComponent } from '@app/components/heroe-villain/heroe-villain.component';

// const routes: Routes = [
//     { path: '', redirectTo: 'home', pathMatch: 'full' },
//     { path: 'home', component: HomeComponent },
//     {
//         path: 'speakers', component: SpeakersComponent,
//         children: [
//             { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
//             { path: ':id', component: BioComponent, outlet: 'bio' }
//         ]
//     }
// ];

const routes: Routes = [
    {
        path: 'characters',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'tournament.title'
        },
        children: [
            {
                path: 'list',
                component: TournamentHeroListComponent,
                outlet: 'heroe'
            },
            {
                path: ':id',
                component: HeroeVillainComponent,
                outlet: 'heroedetail'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
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
