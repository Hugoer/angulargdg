import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UserRouteAccessService } from '@app/core/guards/user-route-access-service';
import { AdminRouteAccessService } from '@app/core/guards/admin-route-access-service';
import { CustomPreloadingStrategy } from '@app/core/guards/preload-custom-strategy';
import { environment } from '@environment/environment';
import { HomeComponent } from '@app/layout/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        loadChildren: './pages/pages.module#PagesModule',
        data: {
            preload: true,
            delay: false
        }
    },
    {
        path: 'heroes',
        component: HomeComponent,
        loadChildren: './heroes/heroes.module#HeroesModule',
        canLoad: [AdminRouteAccessService],
        data: {
            preload: false,
            delay: false
        }
    },
    // {
    //     path: 'villains',
    //     component: HomeComponent,
    //     loadChildren: './villains/villains.module#VillainsModule',
    //     canLoad: [AdminRouteAccessService],
    //     data: {
    //         preload: false,
    //         delay: false
    //     }
    // },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: CustomPreloadingStrategy,
        useHash: true,
        enableTracing: environment.enableTracing
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
