import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { IUser } from '@app/core/user.model';
import { Observable, Subject } from 'rxjs';
import { AppLanguageService } from '@app/core/language/language.service';
import { UserService } from '@app/core/user.service';
import { takeUntil } from 'rxjs/operators';
import { MatSlideToggleChange, MatSelectChange } from '@angular/material';


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
                this.uid = user.uid;
                this.langKey = user.langKey;
            });
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    changeLanguage(data: MatSelectChange) {
        const newLang = data.value;
        this.userService.changeLanguage(this.uid, newLang);
        this.langService.changeLanguage(newLang);
    }

    changeAllowShowVillains(data: MatSlideToggleChange) {
        const isActive = data.checked;
        this.userService.changeAllowShowVillains(this.uid, isActive);
    }

}
