import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory, Category } from '../../../../both/models/category.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const baseUrl = `${environment.urlApi}/categories`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.httpClient
      .get<ICategory[]>(baseUrl)
      .pipe(map(categories => categories.map(c => new Category(c))));
  }
}
