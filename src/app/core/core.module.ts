import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { Ng2Webstorage } from 'ngx-webstorage';

import { MainInterceptor } from './handlers/interceptor.service';
import { UserRouteAccessService } from './guards/user-route-access-service';
import { appEventManager } from './handlers/eventmanager.service';

import { ErrorsHandler } from './handlers/errors-handler';
import { AdminRouteAccessService } from './guards/admin-route-access-service';
import { LayoutModule } from '../layout/layout.module';
import { CustomPreloadingStrategy } from './guards/preload-custom-strategy';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '@environment/environment';


@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        Ng2Webstorage.forRoot({ prefix: 'gdg-', separator: '-', caseSensitive: true }),
        LayoutModule,
    ],
    declarations: [
    ],
    exports: [
        Ng2Webstorage,
        BrowserModule,
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    providers: [
        UserRouteAccessService,
        AdminRouteAccessService,
        CustomPreloadingStrategy,
        appEventManager,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MainInterceptor,
            multi: true
        },
        {
            provide: ErrorHandler,
            useClass: ErrorsHandler,
        }
    ]
})
export class CoreModule { }
