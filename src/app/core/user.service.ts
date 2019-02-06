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
        return this.afs.doc<IUser>(`user/${uid}`).update({
            langKey: langKey
        });
    }

    changeAllowShowVillains(uid: string, checked: boolean): Promise<void> {
        return this.afs.doc<IUser>(`user/${uid}`).update({
            allowShowVillains: checked
        });
    }

    getUser(uid: string): Observable<firebase.firestore.DocumentSnapshot> {
        const userDoc: AngularFirestoreDocument<IUser> = this.afs.doc<IUser>(`user/${uid}`);
        return userDoc.get().pipe(take(1));
    }

    createUser(userFb: firebase.User): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            const userDoc: AngularFirestoreDocument<IUser> = this.afs.doc<IUser>(`user/${userFb.uid}`);
            userDoc
                .get()
                .pipe(take(1))
                .subscribe((docSnapshot) => {
                    const user: IUser = {
                        displayName: userFb.displayName,
                        email: userFb.email,
                        photoURL: userFb.photoURL,
                        langKey: environment.defaultI18nLang,
                        uid: userFb.uid
                    }
                    if (!docSnapshot.exists) {

                        userDoc.set(user)
                            .then(() => {
                                resolve(user);
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    } else {
                        resolve(user);
                    }
                });
        });
    }

}