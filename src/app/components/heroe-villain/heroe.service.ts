import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

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
