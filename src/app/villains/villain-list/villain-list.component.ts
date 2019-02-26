import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';
import { HeroVillainService } from '@app/core/services/heroVillain.service';

@Component({
    selector: 'app-villain-list',
    templateUrl: './villain-list.component.html',
    styleUrls: ['./villain-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainListComponent {

    villains$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
    ) {
        this.villains$ = this.heroVillainService.getVillains();

    }

}
