import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRouteAccessService } from './core/guards/user-route-access-service';
import { HomeComponent } from './layout/home/home.component';
import { CustomPreloadingStrategy } from './core/guards/preload-custom-strategy';
import { environment } from '../environments/environment';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'heroes',
        component: HeroeListComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: CustomPreloadingStrategy,
            useHash: true,
            enableTracing: environment.enableTracing
        }),
        HeroesModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
