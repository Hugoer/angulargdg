import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    CanLoad,
    Route
} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class UserRouteAccessService implements CanLoad, CanActivate {

    constructor(
    ) {
    }

    private can(): boolean {
        return true;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.can();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return true;
        return this.can();
    }
}
