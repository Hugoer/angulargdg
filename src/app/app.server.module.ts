import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
// import { AppRoutingModule } from './app-routing.module';
const routes: Routes = [
    {
        path: 'shell',
        component: HomeComponent,
    },

];

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        RouterModule.forRoot(routes),
    ],

    bootstrap: [AppComponent],
    providers: [
    ],

    entryComponents: [
    ],
    declarations: [
    ],
})
export class AppServerModule { }
