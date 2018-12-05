import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: auth.Auth = null;
  userObservable: Observable<any>;
  constructor(public afAuth: AngularFireAuth) {
    this.userObservable = this.afAuth.auth.onAuthStateChanged(user => user
      //   function(user) {
      //   if (user) {
      //     // User is signed in.
      //     console.log('user connecté');
      //     this.userObservable = user;
      //   } else {
      //     // No user is signed in.
      //     console.log('user non connecté');
      //   }
      // }
    );

  }

  // get currentUserObservable(): any {
  //   return
  // }
  get authenticated(): boolean {
    return this.userObservable !== null;
  }
  get currentUserObservable(): any {
    return this.afAuth.auth;
  }
  getUser(): Observable<any> {
    return this.userObservable;
  }
  login(email, password): any {
    console.log('service auth', email, password);
    const retour = this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
    console.log(retour);
  }
  loginGoogle(): any {
    console.log('service auth login google');
    const retour = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log(retour);
    this.afAuth.idToken.subscribe(token => {
      console.log(token);
    });
    return retour;
  }
  register(email, password): any {
    console.log('service auth register');
    return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): any {
    console.log('service auth logout');
    const retour = this.afAuth.auth.signOut();
    console.log(retour);
    this.userObservable = null;
  }
}

export interface User {
  idFirebase: string;
  isActive: boolean;
  idSubscription: string;
}
