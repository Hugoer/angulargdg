
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {

    constructor(
        private http: HttpClient,
    ) { }

    // searchCity(city: string): Observable<IMapQuestAPI[]> {
    //     return this.http.get<IMapQuestAPI[]>(
    //         `${environment.map.mapquest.apiUrl}${city}?format=json&key=${environment.map.mapquest.consumerKey}`
    //     );
    // }

}
