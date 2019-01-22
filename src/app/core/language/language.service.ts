import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
    providedIn: 'root'
})
export class AppLanguageService {

    constructor(
        private translateService: TranslateService,
        private localStorage: LocalStorageService,
    ) {
    }

    changeLanguage(languageKey: string) {
        const languageStorage = this.localStorage.retrieve('userLanguage');
        if ((!!languageStorage && languageStorage !== languageKey) || (!languageStorage)) {
            console.log('changeLanguage: ' + languageKey);
            this.localStorage.store('userLanguage', languageKey);
            this.translateService.use(languageKey);
            moment.locale(languageKey);
        }

    }

    getCurrent(): string {
        return this.translateService.currentLang;
    }

}
