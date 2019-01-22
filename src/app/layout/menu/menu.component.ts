import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@app/core/user.service';
import { Router, RouterEvent } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';

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
        'signOutQuestion': '',
    };

    user: Promise<IUser>;
    userAdmin = true;

    constructor(
        private translateService: TranslateService,
        private userService: UserService,
        private router: Router,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
    ) {
        this.translateService.get([
            'global.menu.tournament.title',
            'main.signOut',
            'main.signOutQuestion',
        ]).toPromise().then((translation) => {
            this.main.index = translation['global.menu.tournament.title'];
            this.main.signOut = translation['main.signOut'];
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
        this.user = this.userService.getIdentity();
        this.user
            .then((user) => {
                // this.userAdmin = user.authorities.includes(environment.roleAccessAdminModule);
                this.userAdmin = true;
            });
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
                    this.userService.logout()
                        .then(() => {
                            // window.location.href = '.';
                        })
                        .catch((err) => {
                            this.snackBar.open(err, null, {
                                duration: environment.toast.duration,
                                verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
                                horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition
                            });
                        });
                }
            }
        });
    }

}
