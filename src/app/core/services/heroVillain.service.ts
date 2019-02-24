import { Injectable } from '@angular/core';
import { IUser } from '@app/core/user.model';
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

    getHeroes(): Observable<IHeroVillain[]> {
        return this.getCharacters('heroe');
    }

    getVillains(): Observable<IHeroVillain[]> {
        return this.getCharacters('villain');
    }

}