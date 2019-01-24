import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeroService } from './heroe.service';

@Component({
    selector: 'heroe-villain',
    templateUrl: './heroe-villain.component.html',
    styleUrls: ['./heroe-villain.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeVillainComponent implements OnInit {

    constructor(
        private heroService: HeroService,
    ) { }

    ngOnInit() {
        // this.heroService.getHeroes()
        // .subscribe((heroes) => {
        //     console.log(heroes);
        // });
    }

}
