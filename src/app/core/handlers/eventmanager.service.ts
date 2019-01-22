import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class appEventManager {

    observable: Observable<any>;
    observer: Observer<any>;

    constructor() {
        // Observable.create
        this.observable = Observable.create((observer: Observer<any>) => {
            this.observer = observer;
        }).pipe(share());
    }

    broadcast(event: any) {
        if (this.observer != null) {
            this.observer.next(event);
        }
    }

    subscribe(eventName: any, callback: any) {
        const subscriber: Subscription = this.observable
            .pipe(
                filter((event) => {
                    return event.name === eventName;
                })
            ).subscribe(callback);
        return subscriber;
    }

    destroy(subscriber: Subscription) {
        subscriber.unsubscribe();
    }
}
