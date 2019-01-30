import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(
        private http: HttpClient,
    ) {

    }

    getHeroes() { }

    // getHeroes(): Observable<any> {
    //     // return this.http.get(`${environment.apiRestUrl}heroe`);
    // }

}
