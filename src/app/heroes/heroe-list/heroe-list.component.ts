import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-heroe-list',
    templateUrl: './heroe-list.component.html',
    styleUrls: ['./heroe-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeListComponent implements OnInit {

    heroes$: Observable<IHeroVillain[]>;

    constructor(
        private afs: AngularFirestore,
    ) {
        this.heroes$ = this.afs.collection<IHeroVillain>(`heroe`)
            .valueChanges()
            .pipe(take(1))
            .pipe(map((heroes) => {
                return heroes.map((heroe) => {
                    const timeStamp = new Date(heroe.since.seconds * 1000);
                    return <IHeroVillain>{
                        ...heroe,
                        since: timeStamp,
                        type: 'Hero'
                    }
                });
            }));

    }

    ngOnInit() {
    }

}
