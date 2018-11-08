import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = '/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client: HttpClient) { }

  getCurrentUser(firebaseId): Observable<any> {
    return this.client.get(`${baseUrl}/current/${firebaseId}`);
  }

  getUsers(): Observable<any> {
    return this.client.get(`${baseUrl}/`);
  }

  getUser(id): Observable<any> {
    return this.client.get(`${baseUrl}/${id}`);
  }

  deleteUser(id): Observable<any> {
    return this.client.delete(`${baseUrl}/${id}`);
  }

  updateUser(id, data): Observable<any> {
    return this.client.put(`${baseUrl}/${id}`, data);
  }

  createUser(data): Observable<any> {
    return this.client.post(`${baseUrl}/`, data);

  }


}
