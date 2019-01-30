import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GlobalReduceModule } from '../redux/global.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        GlobalReduceModule,
        RouterModule,
        MomentModule,
    ],
    declarations: [
    ],
    entryComponents: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        GlobalReduceModule,
        RouterModule,
        MomentModule,
    ]
})
export class SharedModule { }
