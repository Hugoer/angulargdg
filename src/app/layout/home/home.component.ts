import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { appEventManager } from '@app/core/handlers/eventmanager.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    @ViewChild('fnMenu') menu: MatSidenav;

    constructor(
        private eventManager: appEventManager,
    ) {
    }

    open() {
        this.menu.open();
    }

    close() {
        this.menu.close();
    }

    ngOnInit() {
        this.eventManager.subscribe('openSideNav', () => {
            this.open();
        });
        this.eventManager.subscribe('closeSideNav', () => {
            this.close();
        });

    }

}
