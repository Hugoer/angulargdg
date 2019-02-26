import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterEvent } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';

import { ConfirmDialogComponent } from '@app/components/confirm/confirm.component';
import { Observable, Subject } from 'rxjs';
import { UserService } from '@app/core/user.service';
import { takeUntil, take } from 'rxjs/operators';
import { AppLanguageService } from '@app/core/language/language.service';
import { IUser } from '@app/core/user.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    url = '';

    user$: Observable<firebase.User>;

    userAdmin = true;
    userLogged = false;

    private _destroyed$ = new Subject();

    constructor(
        private translateService: TranslateService,
        private router: Router,
        public dialog: MatDialog,
        private afAuth: AngularFireAuth,
        private languageService: AppLanguageService,
        private userService: UserService,
    ) {

        this.user$ = this.afAuth.user;
        this.user$
            .pipe(takeUntil(this._destroyed$))
            .subscribe((userFb: firebase.User) => {
                if (!!userFb) {
                    this.userService.createUser(userFb)
                        .then((user) => {
                            if (!user) {
                                this.userService.getUser(userFb.uid)
                                    .pipe(take(1))
                                    .subscribe((userRetrieved) => {
                                        const _user = userRetrieved.data();
                                        const langKey = _user.langKey;
                                        this.languageService.changeLanguage(langKey);
                                    });
                            } else {
                                // Si se ha creado justo ahora...
                                const langKey = user.langKey;
                                this.languageService.changeLanguage(langKey);
                            }

                        });
                    this.userLogged = true;
                } else {
                    this.userLogged = false;
                }
            });
    }


    ngOnInit() {
        this.url = this.router.url;
        this.router.events
            .pipe(takeUntil(this._destroyed$))
            .subscribe((event: RouterEvent) => {
                if (!!event.url) {
                    this.url = this.router.url;
                }
            });
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    signIn() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }


    signOut(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: this.translateService.instant('main.signOut'),
                question: this.translateService.instant('main.signOutQuestion')
            }
        });
        dialogRef.afterClosed()
            .pipe(take(1))
            .subscribe((result) => {
                if (!!result) {
                    this.afAuth.auth.signOut();
                    // this.router.navigate(['']);
                    this.router.navigateByUrl('characters/(heroe:list)');
                }
            });
    }

}
