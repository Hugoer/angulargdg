import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillainListComponent } from './villain-list/villain-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: VillainListComponent,
                data: {
                    pageTitle: 'villains.title'
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
export class VillainRoutingModule { }
