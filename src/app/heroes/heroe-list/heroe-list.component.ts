import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';
import { Observable } from 'rxjs';
import { HeroVillainService } from '@app/core/services/heroVillain.service';

@Component({
    selector: 'app-heroe-list',
    templateUrl: './heroe-list.component.html',
    styleUrls: ['./heroe-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeListComponent {

    heroes$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
    ) {
        this.heroes$ = this.heroVillainService.getHeroes();

    }

}
