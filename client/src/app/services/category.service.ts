import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory, Category } from '../../../../both/models/category.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from 'firebase';

const baseUrl = `${environment.urlApi}/categories`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions: {
    headers?: HttpHeaders
  };
  constructor(public authService: AuthService, private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.userToken
      })
    };
  }

  getCategories(): Observable<ICategory[]> {
    return this.httpClient
      .get<ICategory[]>(baseUrl, this.httpOptions)
      .pipe(map(categories => categories.map(c => new Category(c))));
  }
}
