import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    CanLoad,
    Route
} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '@app/core/user.service';

@Injectable()
export class UserRouteAccessService implements CanLoad, CanActivate {

    constructor(
        private userService: UserService,
    ) {
    }

    private can(): Promise<boolean> {
        // console.log('user-route-access-service.ts');
        return new Promise((resolve, reject) => {
            this.userService.isAuthenticated()
                .then((isAuth: boolean) => {
                    resolve(isAuth);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.can();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return true;
        return this.can();
    }
}
