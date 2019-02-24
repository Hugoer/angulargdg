import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroVillain } from '../heroe-villain/hero-villain.model';
import { HeroVillainService } from '@app/core/services/heroVillain.service';

@Component({
    selector: 'app-tournament-hero-list',
    templateUrl: './tournament-hero-list.component.html',
    styleUrls: ['./tournament-hero-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentHeroListComponent implements OnInit {

    heroes$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
    ) {
        console.log('conmstructor TournamentHeroListComponent');
    }

    ngOnInit() {
        this.heroes$ = this.heroVillainService.getHeroes();
    }

    trackByFn(index, item) {
        return item.since // or item.id
    }


}
