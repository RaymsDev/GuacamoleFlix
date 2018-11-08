import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userObservable: Observable<any>;
  constructor(public afAuth: AngularFireAuth) {
    this.userObservable = this.afAuth.user;
   }

  getUser(): Observable<any> {
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
  }
  register(email, password): any {
    console.log('service auth register');
    const retour = this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
    console.log(retour);
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
