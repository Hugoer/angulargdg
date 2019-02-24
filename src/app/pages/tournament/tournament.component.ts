import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';
import { Observable } from 'rxjs';
import { HeroVillainService } from '@app/core/services/heroVillain.service';

@Component({
    selector: 'app-tournament',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentComponent implements OnInit {

    heroes$: Observable<IHeroVillain[]>;
    villains$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
    ) { }

    ngOnInit() {
        this.heroes$ = this.heroVillainService.getHeroes();
        this.villains$ = this.heroVillainService.getVillains();
    }

    trackByFn(index, item) {
        return item.since // or item.id
    }


}
