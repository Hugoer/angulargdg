import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from '@app/core/user.model';
import { UserService } from '@app/core/user.service';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

    user$ = new Subject<IUser>();

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
    ) {
        const userUid = this.route.snapshot.paramMap.get('id');
        this.userService.getUser(userUid)
            .pipe(take(1))
            .subscribe((doc) => {
                this.user$.next(<IUser>doc.data());
            });
    }

    ngOnInit() {

    }

}
