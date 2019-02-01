import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@app/core/user.model';
import { UserService } from '@app/core/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

    user: Observable<IUser>;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
    ) {
        const userUid = this.route.snapshot.paramMap.get('id');
        // this.user = this.userService.getUser(userUid);

    }

    ngOnInit() {
    }

}
