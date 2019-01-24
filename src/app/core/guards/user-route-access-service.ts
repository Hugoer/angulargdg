import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    CanLoad,
    Route,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { environment } from '@environment/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UserRouteAccessService implements CanLoad, CanActivate {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private snackBar: MatSnackBar,
        private translateService: TranslateService,
    ) {
    }

    private can(): Promise<boolean> | boolean {
        this.router.navigate['home'];
        return false;
        // return new Promise<boolean>((resolve, reject) => {
        // this.afAuth.user.subscribe((user) => {
        //     if (!!user) {
        //         resolve(true);
        //     } else {
        //         this.snackBar.open(this.translateService.instant('angulargdg.http.401'), null, {
        //             duration: environment.toast.duration,
        //             verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
        //             horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition
        //         });
        // this.router.navigate[''];
        // reject(false);
        //     }
        // });
        // });

        // if(this.authService.isLoggedIn !== true) {
        //     window.alert('Access Denied, Login is Required to Access This Page!')
        //     this.router.navigate(['sign-in'])
        //   }
        //   return true;


    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.can();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return true;
        return this.can();
    }
}
