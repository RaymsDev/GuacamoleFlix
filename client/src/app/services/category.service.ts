import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICategory, Category } from '../../../../both/models/category.model';
import { environment } from 'src/environments/environment';
import { map, tap, flatMap, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
const baseUrl = `${environment.urlApi}/categories`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(public authService: AuthService, private httpClient: HttpClient) {
  }

  getCategories(): Observable<ICategory[]> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<ICategory[]>(baseUrl, httpOptions)
          .pipe(map(categories => categories.map(c => new Category(c))));
      }));
  }

  createNewCategory(category): Observable<any> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.post(`${baseUrl}/`, category, httpOptions).pipe(
          tap(cat => console.log(`added category w/ id=${cat}`)),
          catchError(this.handleError('category'))
        );
      }));
  }

  deleteCategory(id): Observable<any> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.delete(`${baseUrl}/${id}`, httpOptions).pipe(
          catchError(this.handleError('delete user'))
        );
      }));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
