import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroVillainService } from '@app/core/services/heroVillain.service';
import { IHeroVillain } from '../heroe-villain/hero-villain.model';

@Component({
    selector: 'app-tournament-villain-list',
    templateUrl: './tournament-villain-list.component.html',
    styleUrls: ['./tournament-villain-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentVillainListComponent implements OnInit {

    villains$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
    ) {
        console.log('conmstructor TournamentHeroListComponent');
    }

    ngOnInit() {
        this.villains$ = this.heroVillainService.getVillains();
    }

    trackByFn(index, item) {
        return item.since // or item.id
    }
}
