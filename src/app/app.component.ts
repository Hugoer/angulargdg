import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'MarvelApp';
    constructor(
        private swUpdate: SwUpdate,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
    ) {

        this.matIconRegistry.addSvgIcon(
            `heroe`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/HERO3.svg`)
        );
        this.matIconRegistry.addSvgIcon(
            `villain`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/VILLAIN3.svg`)
        );

        if (this.swUpdate.isEnabled) {
            swUpdate.checkForUpdate();
            this.swUpdate.available.subscribe(() => {
                if (confirm(`Do you want to update ${this.title}?`)) {
                    window.location.reload();
                }
            });
        }
    }
}
