import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from '@app/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js',
            {
                enabled: environment.production
            }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
