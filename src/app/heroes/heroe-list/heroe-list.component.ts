import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-heroe-list',
    templateUrl: './heroe-list.component.html',
    styleUrls: ['./heroe-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeListComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
