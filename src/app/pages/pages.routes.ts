import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from '@app/pages/tournament/tournament.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentHeroListComponent } from '@app/components/tournament-hero-list/tournament-hero-list.component';
import { HeroeVillainComponent } from '@app/components/heroe-villain/heroe-villain.component';

const namedRoutes: Routes = [
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
];

const routes: Routes = [
    {
        path: 'characters',
        component: TournamentComponent,
        data: {
            showNavbarMenu: true,
            pageTitle: 'tournament.title'
        },
        children: namedRoutes
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
