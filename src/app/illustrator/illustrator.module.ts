import { NgModule } from '@angular/core';
import { IllustratorRoutingModule } from './illustrator.routes';
import { IllustratorComponent } from './illustrator/illustrator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_COMPONENTS_MODULES = [
    MatIconModule,
    MatCardModule,
];

@NgModule({
    imports: [
        IllustratorRoutingModule,
        MATERIAL_COMPONENTS_MODULES,
    ],
    exports: [
        MATERIAL_COMPONENTS_MODULES,
    ],
    declarations: [
        IllustratorComponent,
    ],
    entryComponents: [
        IllustratorComponent,
    ],
    providers: [

    ]
})

export class IllustratorModule { }
