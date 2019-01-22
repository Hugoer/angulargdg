import { Directive, HostListener, OnInit } from '@angular/core';
import { appEventManager } from '@app/core/handlers/eventmanager.service';

@Directive({
    selector: '[appClosemenu]'
})

export class CloseMenuDirective {

    @HostListener('click', ['$event'])
    clickEvent($event: any) {
        this.eventManager.broadcast({
            name: 'closeSideNav'
        });
    }

    constructor(
        private eventManager: appEventManager
    ) {
    }

}
