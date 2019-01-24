import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Route,
    CanLoad
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

import { IUser } from '@app/core/user.model';

@Injectable()
export class AdminRouteAccessService implements CanActivate, CanLoad {

    constructor(
        // private userService: UserService,
    ) {
    }

    private can(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
            // this.userService.getIdentity()
            //     .then((user: IUser) => {
            //         const isAdmin = true;
            //         resolve(isAdmin);
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //         reject(err);
            //     });
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
