import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';

import { IUser } from '@app/core/user.model';
import { WebgisLanguageService } from './language/language.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: IUser;

    constructor(
        private http: HttpClient,
        private languageService: WebgisLanguageService,
        private localStorage: LocalStorageService,
    ) {
    }

    logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            // this.http.post(environment.apiUrl + 'logout', {})
            //     .toPromise()
            //     .then(() => {
            //         this.localStorage.clear('userLanguage');
            //         resolve();
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //         reject(err);
            //     });
        });
    }

    getIdentity(force?: boolean): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            if (force === true || !this.user) {
                // this.http.get(environment.apiUrl + 'account')
                //     .toPromise()
                //     .then((response: IUser) => {
                //         this.user = {
                //             ...response,
                //             langKey: response.langKey.toString().toLocaleLowerCase()
                //         };
                //         // Si al cargar el usuario no tiene langKey, y en localStorage tampoco, se pone la de por defecto
                //         if (!this.languageService.getCurrent()) {
                //             if (!!this.user.langKey) {
                //                 this.languageService.changeLanguage(this.user.langKey);
                //             } else {

                //                 this.languageService.changeLanguage(environment.defaultI18nLang);
                //             }
                //         }

                //         resolve(response);
                //     })
                //     .catch((err) => {
                //         reject(err);
                //     });
            } else if (!!this.user) {
                resolve(this.user);
            }

        });
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.getIdentity()
                .then((result) => {
                    resolve(!!result);
                })
                .catch((err) => {
                    // console.error(err);
                    resolve(false);
                });
        });
    }

    getToken(): string {
        return !!this.user ? this.user.accessToken : null;
    }

    setToken(token: string): void {
        this.user = {
            ...this.user,
            accessToken: token
        };
    }
}
