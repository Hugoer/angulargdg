import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { compReducers } from './global.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('gdg', compReducers)
    ],
    exports: [
        CommonModule,
        StoreModule
    ]
})

export class GlobalReduceModule { }
