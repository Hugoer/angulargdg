import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterEvent } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { ConfirmDialogComponent } from '@app/components/confirm/confirm.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

    constructor(
        private translateService: TranslateService,
        private router: Router,
        public dialog: MatDialog,
        private afAuth: AngularFireAuth,
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
            .subscribe((user: firebase.User) => {
                console.log(user);
            });
    }


    ngOnInit() {
        this.url = this.router.url;
        this.router.events.subscribe((event: RouterEvent) => {
            if (!!event.url) {
                this.url = this.router.url;
            }
        });
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
        dialogRef.afterClosed().subscribe((result) => {
            if (!!result) {
                this.afAuth.auth.signOut();
            }
        });
    }

}
