import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



const baseUrl = 'http://localhost:3000/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client: HttpClient) { }

  getCurrentUser(firebaseId): Observable<any> {
    return this.client.get(`${baseUrl}/current/${firebaseId}`);
  }

  getUsers(): any {
    console.log('get user');
    const users =  this.client.get(`${baseUrl}`);
    console.log(users);
    return users;
  }

  getUser(id): Observable<any> {
    return this.client.get(`${baseUrl}/${id}`);
  }

  deleteUser(id): Observable<any> {
    return this.client.delete(`${baseUrl}/${id}`);
  }

  updateUser(id, data, firebaseUser): Observable<any> {
    return this.client.put(`${baseUrl}/${id}`, data, {
      headers: {
        authorisation : firebaseUser
      }
    });
  }

  createUser(data, options): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': options
      })
    };
    const retour = this.client.post(`${baseUrl}/`, data, httpOptions ).pipe(
      tap((user) => console.log(`added hero w/ id=${user}`)),
      catchError(this.handleError('addHero'))
    );
    console.log(retour);
    return retour;

  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
