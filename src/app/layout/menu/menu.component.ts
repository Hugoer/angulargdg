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

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    url = '';
    main = {
        'index': '',
        'signOut': '',
        'signIn': '',
        'signOutQuestion': '',
    };

    user: Observable<firebase.User>;

    userAdmin = true;
    userLogged = false;

    private _destroyed$ = new Subject();

    constructor(
        private translateService: TranslateService,
        private router: Router,
        public dialog: MatDialog,
        private afAuth: AngularFireAuth,

        private userService: UserService,
    ) {
        this.translateService.get([
            'global.menu.tournament.title',
            'main.signOut',
            'main.signIn',
            'main.signOutQuestion',
        ]).toPromise().then((translation) => {
            this.main.index = translation['global.menu.tournament.title'];
            this.main.signOut = translation['main.signOut'];
            this.main.signIn = translation['main.signIn'];
            this.main.signOutQuestion = translation['main.signOutQuestion'];
        });
        this.user = this.afAuth.user;
        this.user
            .pipe(takeUntil(this._destroyed$))
            .subscribe((userFb: firebase.User) => {
                if (!!userFb) {
                    this.userService.createUser(userFb);
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
                title: this.main.signOut,
                question: this.main.signOutQuestion
            }
        });
        dialogRef.afterClosed()
            .pipe(take(1))
            .subscribe((result) => {
                if (!!result) {
                    this.afAuth.auth.signOut();
                    this.router.navigate(['']);
                }
            });
    }

}
