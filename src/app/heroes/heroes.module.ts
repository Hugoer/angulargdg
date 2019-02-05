import { NgModule } from '@angular/core';
import { ComponentsModule } from '@app/components/components.module';
import { HeroeRoutingModule } from '@app/heroes/heroes.routes';
import { HeroeListComponent } from './heroe-list/heroe-list.component';

@NgModule({
    imports: [
        HeroeRoutingModule,
        ComponentsModule,
    ],
    exports: [
        ComponentsModule,
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
