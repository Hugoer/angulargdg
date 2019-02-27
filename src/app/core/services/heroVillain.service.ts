import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IHeroVillain } from '@app/components/heroe-villain/hero-villain.model';

type characterType = 'heroe' | 'villain';

@Injectable({
    providedIn: 'root'
})
export class HeroVillainService {

    constructor(
        private afs: AngularFirestore,
    ) {

    }

    private getCharacters(type: characterType): Observable<IHeroVillain[]> {
        return this.afs.collection<IHeroVillain>(type)
            .valueChanges()
            .pipe(take(1))
            .pipe(map((heroes) => {
                return heroes.map((heroe) => {
                    const timeStamp = new Date(heroe.since.seconds * 1000);
                    return <IHeroVillain>{
                        ...heroe,
                        since: timeStamp,
                        type: type.toString()
                    }
                });
            }));
    }

    getHeroe(uid: string) {
        return this.afs.collection<IHeroVillain>('heroe')
            .valueChanges()
            .pipe(take(1))
            .pipe(map((heroes) => {
                return heroes.filter((heroe) => {
                    const timeStamp = new Date(heroe.since.seconds * 1000);
                    heroe.since = timeStamp;
                    return (heroe.uid === uid);
                });
            }));
    }

    getHeroes(): Observable<IHeroVillain[]> {
        return this.getCharacters('heroe');
    }

    getVillains(): Observable<IHeroVillain[]> {
        return this.getCharacters('villain');
    }

}