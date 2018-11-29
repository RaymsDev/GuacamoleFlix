import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../../../../both/models/category.model'
@Injectable({
  providedIn: 'root'
})
export class CategoryService 
{
  MesCategory: Array<Category>;
  url: String;
  constructor(private http: HttpClient) 
  { 
    this.url = 'http://localhost:3000/';
    this.MesCategory = new Array<Category>();
  }

  GetAllCategory(): Observable<Object>
  {
    return this.http.get(this.url + "categories");
  }

}
