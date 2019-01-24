import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterEvent } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
    MatSnackBar,
    MatSnackBarVerticalPosition,
    MatSnackBarHorizontalPosition
} from '@angular/material';

import { environment } from '@environment/environment';

import { IUser } from '@app/core/user.model';
import { ConfirmDialogComponent } from '@app/components/confirm/confirm.component';

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

    user: Promise<IUser>;
    userAdmin = true;
    userLogged = false;

    constructor(
        private translateService: TranslateService,
        private router: Router,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
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
    }

    ngOnInit() {
        this.url = this.router.url;
        this.router.events.subscribe((event: RouterEvent) => {
            if (!!event.url) {
                this.url = this.router.url;
            }
        });
        // this.user = this.userService.getProfile();
        // this.user
        //     .then((user) => {
        //         // this.userAdmin = user.authorities.includes(environment.roleAccessAdminModule);
        //         this.userAdmin = true;
        //         this.userLogged = true;
        //     });
    }

    signIn(): void {
        // this.userService.login();
        // this.authService.login();
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
                const _result = JSON.parse(result);
                if (_result === true) {
                    // this.authService.logout(true);
                    // .then(() => {
                    //     // window.location.href = '.';
                    // })
                    // .catch((err) => {
                    // this.snackBar.open(err, null, {
                    //     duration: environment.toast.duration,
                    //     verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
                    //     horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition
                    // });
                    // });
                }
            }
        });
    }

}
