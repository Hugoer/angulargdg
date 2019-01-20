import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'MarvelApp';
    constructor(
        private swUpdate: SwUpdate,
    ) {
        if (this.swUpdate.isEnabled) {
            swUpdate.checkForUpdate();
            this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
                if (confirm(`Do you want to update?`)) {
                    window.location.reload();
                }
            });
        }
    }
}
