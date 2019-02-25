import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroVillain } from '../heroe-villain/hero-villain.model';
import { HeroVillainService } from '@app/core/services/heroVillain.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tournament-hero-list',
    templateUrl: './tournament-hero-list.component.html',
    styleUrls: ['./tournament-hero-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentHeroListComponent implements OnInit {

    heroes$: Observable<IHeroVillain[]>;
    villains$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
        private router: Router,
    ) {
        console.log('conmstructor TournamentHeroListComponent');
    }

    ngOnInit() {
        this.heroes$ = this.heroVillainService.getHeroes();
        this.villains$ = this.heroVillainService.getVillains();
    }

    trackByFn(index, item) {
        return item.since // or item.id
    }

    showBio(id) {
        this.router.navigateByUrl(`/characters/(heroe:list//heroedetail:${id})`);
    }

    showBioVillain(id) {
        this.router.navigate(['', { outlets: { 'villaindetail': [id] } }]);
    }

}
