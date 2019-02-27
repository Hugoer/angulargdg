import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '@app/core/services/user.model';
import { UserService } from '@app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {

    user$ = new Subject<IUser>();

    private _destroyed$ = new Subject();

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private afs: AngularFirestore,
    ) {
        const userUid = this.route.snapshot.paramMap.get('id');

        this.userService.getUser(userUid)
            .pipe(take(1))
            .subscribe((doc) => {
                this.user$.next(<IUser>doc.data());
            });

        this.afs.collection<IUser>(`user`).doc(userUid)
            .valueChanges()
            .pipe(takeUntil(this._destroyed$))
            .subscribe((userUpdated: IUser) => {
                this.user$.next(<IUser>userUpdated);
            });
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

}
