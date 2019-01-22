import { NgModule } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
    TranslateModule,
    TranslateLoader,
    MissingTranslationHandler,
    TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { WebgisLanguageService } from './language.service';
import { WebgisMissingTranslationHandler } from './missing-translation';
import { WebgisTitleService } from './language.helper';
import { LocalStorageService } from 'ngx-webstorage';

export function translatePartialLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'i18n/', '.json');
}

export function missingTranslationHandler() {
    return new WebgisMissingTranslationHandler();
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
        WebgisLanguageService,
        WebgisMissingTranslationHandler,
        WebgisTitleService,
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
        }
    }
}
