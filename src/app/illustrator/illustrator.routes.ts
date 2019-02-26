import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IllustratorComponent } from './illustrator/illustrator.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: IllustratorComponent,
                data: {
                    pageTitle: 'illustrator.title'
                }
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class IllustratorRoutingModule { }
