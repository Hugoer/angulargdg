import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeListComponent } from './heroe-list/heroe-list.component';

const routes: Routes = [
    {
        path: 'heroe',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: HeroeListComponent,
                data: {
                    pageTitle: 'global.menu.admin.main'
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
export class AdminRoutingModule { }
