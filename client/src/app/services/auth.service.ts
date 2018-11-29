import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string;
  userObservable: Observable<User>;
  constructor(public afAuth: AngularFireAuth) {
    this.userObservable = this.afAuth.authState;
    this.afAuth.idToken.subscribe(token => this.userToken = token);
  }

  getUser(): Observable<User> {
    return this.userObservable;
  }
  login(email, password): any {
    console.log('service auth', email, password);
    const retour = this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
    console.log(retour);
  }
  loginGoogle() {
    console.log('service auth login google');
    const retour = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log(retour);
    this.afAuth.idToken.subscribe(token => {
      console.log(token);
    });
  }
  register(email, password): any {
    console.log('service auth register');
    return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): any {
    console.log('service auth logout');
    const retour = this.afAuth.auth.signOut();
    console.log(retour);
  }

}

export interface User {
  idFirebase: string;
  isActive: boolean;
  idSubscription: string;
}
