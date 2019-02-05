import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';

@Component({
    selector: 'app-villain-list',
    templateUrl: './villain-list.component.html',
    styleUrls: ['./villain-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainListComponent implements OnInit {

    villains$: Observable<IHeroVillain[]>;

    constructor(
        private afs: AngularFirestore,
    ) {
        this.villains$ = this.afs.collection<IHeroVillain>(`villain`)
            .valueChanges()
            .pipe(take(1))
            .pipe(map((villains) => {
                return villains.map((villain) => {
                    const timeStamp = new Date(villain.since.seconds * 1000);
                    return <IHeroVillain>{
                        ...villain,
                        since: timeStamp,
                        type: 'Hero'
                    }
                });
            }));

    }

    ngOnInit() {

    }

}
