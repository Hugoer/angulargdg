import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatCheckboxModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { AdminRoutingModule } from './heroes.routes';
import { ComponentsModule } from '../components/components.module';

const MATERIAL_MODULES = [
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatCheckboxModule,
];

@NgModule({
    imports: [
        AdminRoutingModule,
        ComponentsModule,
        MATERIAL_MODULES,
    ],
    exports: [
        ComponentsModule,
        // HeroeListComponent,
    ],
    declarations: [
        HeroeListComponent,
    ],
    entryComponents: [
        HeroeListComponent,
    ],
    providers: [

    ]
})

export class HeroesModule { }
