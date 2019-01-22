import { Component, Input } from '@angular/core';
import { appEventManager } from '@app/core/handlers/eventmanager.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['spinner.component.scss']
})

export class SpinnerComponent {

    @Input() isVisible: boolean;
    lastTime: Date;
    counter: number;

    constructor(
        private eventManager: appEventManager
    ) {
        this.counter = 0;
        this.eventManager.subscribe('httpStart', (response: any) => {
            this.counter++;
            setTimeout(() => {
                if (this.counter > 0) {
                    this.isVisible = true;
                }
            }, 150);
        });
        this.eventManager.subscribe('httpStop', (response: any) => {
            this.counter--;
            if (this.counter === 0) {
                this.isVisible = false;
            }
        });
    }

}
