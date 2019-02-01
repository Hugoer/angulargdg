import { Injectable } from '@angular/core';
import { IUser } from '@app/core/user.model';
import { take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private afs: AngularFirestore,
    ) {

    }

    changeLanguage(uid: string, langKey: string): Promise<void> {
        return this.afs.doc<IUser>(`user/${uid}/langKey`).update({
            langKey: langKey
        });
    }

    getUser(uid: string): Observable<firebase.firestore.DocumentSnapshot> {
        const userDoc: AngularFirestoreDocument<IUser> = this.afs.doc<IUser>(`user/${uid}`);
        return userDoc.get().pipe(take(1));
    }

    createUser(userFb: firebase.User) {
        const userDoc: AngularFirestoreDocument<IUser> = this.afs.doc<IUser>(`user/${userFb.uid}`);
        userDoc
            .get()
            .pipe(take(1))
            .subscribe((docSnapshot) => {
                if (!docSnapshot.exists) {
                    const user: IUser = {
                        displayName: userFb.displayName,
                        email: userFb.email,
                        photoURL: userFb.photoURL,
                        langKey: environment.defaultI18nLang,
                        uid: userFb.uid
                    }
                    userDoc.set(user);
                }
            });
    }

}