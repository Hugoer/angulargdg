import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Route,
    CanLoad,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

import { IUser } from '@app/core/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../user.service';

@Injectable()
export class AdminRouteAccessService implements CanActivate, CanLoad {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private snackBar: MatSnackBar,
        private translateService: TranslateService,
        private userService: UserService,
    ) {
    }

    private redirect() {
        this.snackBar.open(this.translateService.instant('angulargdg.http.403'), null, {
            duration: environment.toast.duration,
            verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
            horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition
        });
        this.router.navigate(['']);
    }

    private can(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log('Admin route access service');
            this.afAuth.user
                .pipe(take(1))
                .subscribe((userFb: firebase.User) => {
                    if (!!userFb) {
                        this.userService.getUser(userFb.uid)
                            .pipe(take(1))
                            .subscribe((doc) => {
                                const user: IUser = <IUser>doc.data();
                                const enoughPermissions = user.allowShowVillains;
                                if (enoughPermissions) {
                                    resolve(true);
                                } else {
                                    resolve(false);
                                    this.snackBar.open(this.translateService.instant('angulargdg.http.403'), null, {
                                        duration: environment.toast.duration,
                                        verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
                                        horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition
                                    });
                                    this.router.navigate(['']);
                                }
                            });
                    } else {
                        resolve(false);
                        this.snackBar.open(this.translateService.instant('angulargdg.http.401'), null, {
                            duration: environment.toast.duration,
                            verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
                            horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition
                        });
                        // this.router.navigate(['']);
                        this.router.navigateByUrl('characters/(heroe:list)');
                    }
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
