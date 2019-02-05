import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IHeroVillain } from './hero-villain.model';

@Component({
    selector: 'heroe-villain',
    templateUrl: './heroe-villain.component.html',
    styleUrls: ['./heroe-villain.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeVillainComponent {

    @Input() character: IHeroVillain;

    constructor(
    ) { }

}
