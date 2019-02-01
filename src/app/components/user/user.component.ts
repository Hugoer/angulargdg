import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IUser } from '@app/core/user.model';
import { Observable } from 'rxjs';
import { AppLanguageService } from '@app/core/language/language.service';
import { UserService } from '@app/core/user.service';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

    @Input() user: Observable<IUser>;

    langKey: string;
    uid: string;

    constructor(
        private userService: UserService,
        private langService: AppLanguageService,
    ) {
        this.user.subscribe((user) => {
            this.langKey = user.langKey;
            this.uid = user.uid;
        });
    }

    ngOnInit() {
    }

    changeLanguage(data) {
        this.userService.changeLanguage(this.uid, data);
    }

}
