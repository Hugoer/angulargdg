import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ModuleMapLoaderModule, ModuleMapNgFactoryLoader } from '@nguniversal/module-map-ngfactory-loader';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        CoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        AppRoutingModule,
        RouterModule,
    ],
    providers: [
    ],
    exports: [
        CoreModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
