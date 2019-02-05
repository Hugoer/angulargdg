import { NgModule } from '@angular/core';
import { ComponentsModule } from '@app/components/components.module';
import { VillainRoutingModule } from './villains.routes';
import { VillainListComponent } from './villain-list/villain-list.component';

@NgModule({
    imports: [
        VillainRoutingModule,
        ComponentsModule,
    ],
    exports: [
        ComponentsModule,
    ],
    declarations: [
        VillainListComponent,
    ],
    entryComponents: [
        VillainListComponent
    ],
    providers: [

    ]
})

export class VillainsModule { }
