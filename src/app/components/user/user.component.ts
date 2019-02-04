import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { IUser } from '@app/core/user.model';
import { Observable, Subject } from 'rxjs';
import { AppLanguageService } from '@app/core/language/language.service';
import { UserService } from '@app/core/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, OnDestroy {

    @Input() user: Subject<IUser>;

    langKey: string;
    uid: string;

    private _destroyed$ = new Subject();

    constructor(
        private userService: UserService,
        private langService: AppLanguageService,
    ) {

    }

    ngOnInit() {
        this.user.asObservable()
            .pipe(takeUntil(this._destroyed$))
            .subscribe((user) => {
                this.langKey = user.langKey;
                this.uid = user.uid;
            });
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    changeLanguage(data) {
        const newLang = data.value;
        this.userService.changeLanguage(this.uid, newLang);
        this.langService.changeLanguage(newLang);
    }

}
