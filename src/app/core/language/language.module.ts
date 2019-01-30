import { NgModule } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
    TranslateModule,
    TranslateLoader,
    MissingTranslationHandler,
    TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppLanguageService } from './language.service';
import { AppMissingTranslationHandler } from './missing-translation';
import { AppTitleService } from './language.helper';
import { LocalStorageService } from 'ngx-webstorage';


import * as moment from 'moment';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';

export function translatePartialLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'i18n/', '.json');
}

export function missingTranslationHandler() {
    return new AppMissingTranslationHandler();
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translatePartialLoader,
                deps: [HttpClient]
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useFactory: missingTranslationHandler,
            },
            isolate: true
        }),
    ],
    declarations: [
    ],
    exports: [
        TranslateModule,
    ],
    providers: [
        AppLanguageService,
        AppMissingTranslationHandler,
        AppTitleService,
    ]
})
export class LanguageModule {
    constructor(
        private translate: TranslateService,
        private localStorage: LocalStorageService,
    ) {
        const languageStorage = this.localStorage.retrieve('userLanguage');
        if (!!languageStorage) {
            this.translate.use(languageStorage);
        } else {
            this.translate.use(environment.defaultI18nLang);
        }
        moment.locale(this.translate.currentLang);
    }
}
