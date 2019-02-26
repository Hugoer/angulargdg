import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';
import { Observable } from 'rxjs';
import { HeroVillainService } from '@app/core/services/heroVillain.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tournament',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentComponent implements OnInit {

    heroes$: Observable<IHeroVillain[]>;

    constructor(
        private heroVillainService: HeroVillainService,
        private router: Router,
        private routeActivated: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.heroes$ = this.heroVillainService.getHeroes();
        this.routeActivated.params.subscribe((params: { id: string }) => {
            if (!params.id) {
            }
        });
        const hasOutletParams = (this.routeActivated.children.length > 1);
        if (hasOutletParams) {
            this.routeActivated.children
                .find((r) => {
                    return (r.outlet === 'heroedetail');
                })
                .params
                .subscribe((params: any) => {
                    if (params.id) {
                        this.router.navigateByUrl(`/characters/(heroe:list//heroedetail:${params.id})`);
                    } else {
                        this.router.navigateByUrl(`/characters/(heroe:list)`);
                    }
                });
        } else {
            this.router.navigateByUrl(`/characters/(heroe:list)`);
        }


    }

    trackByFn(index, item) {
        return item.since // or item.id
    }


}
