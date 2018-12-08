import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { IVideo, Video } from '../../../../both/models/video.model';
import { IUser } from '../../../../both/models/user.model';

const baseUrl = `${environment.production ? window.location.hostname : environment.urlApi}/users`;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getCurrentUser(firebaseId): Observable<IUser> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IUser>(`${baseUrl}/current/${firebaseId}`, httpOptions);
      }));
  }

  getUsers(): Observable<IUser[]> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IUser[]>(`${baseUrl}`, httpOptions);
      }));
  }

  getUser(id): Observable<IUser> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.get<IUser>(`${baseUrl}/${id}`, httpOptions);
      }));
  }

  deleteUser(id): Observable<any> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.delete(`${baseUrl}/${id}`, httpOptions);
      }));
  }

  updateUser(id, data): Observable<IUser> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.put<IUser>(`${baseUrl}/${id}`, data, httpOptions);
      }));
  }

  createUser(data: IUser): Observable<IUser> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .post<IUser>(baseUrl, data, httpOptions);
      }));
  }
}
