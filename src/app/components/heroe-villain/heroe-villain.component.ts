import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { IHeroVillain } from './hero-villain.model';
import { HeroVillainService } from '@app/core/services/heroVillain.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'heroe-villain',
    templateUrl: './heroe-villain.component.html',
    styleUrls: ['./heroe-villain.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeVillainComponent {

    @Input() character: IHeroVillain;
    @Input() simple: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroVillainService,
        private cd: ChangeDetectorRef,
    ) {
        // console.log('constructor HeroeVillainComponent');
        this.route.params.subscribe((params: { id: string }) => {
            if (!!params.id) {
                this.heroService.getHeroe(params.id)
                    .subscribe((heroe) => {
                        this.character = { ...heroe[0] };
                        this.cd.markForCheck();
                    });
            }
        });
    }

}
