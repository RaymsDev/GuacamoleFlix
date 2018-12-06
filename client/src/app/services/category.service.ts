import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory, Category } from '../../../../both/models/category.model';
import { environment } from 'src/environments/environment';
import { map, flatMap } from 'rxjs/operators';
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
}
