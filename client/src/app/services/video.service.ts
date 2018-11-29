import { Injectable } from '@angular/core';
import { IVideo, Video } from '../../../../both/models/video.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from '../../../../both/models/category.model';
import { AuthService } from './auth.service';

const url = `${environment.urlApi}/videos`;

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  httpOptions: {
    headers?: HttpHeaders
  };
  constructor(private authService: AuthService, private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.userToken
      })
    };
  }

  public getVideos(): Observable<IVideo[]> {
    return this.httpClient
      .get<IVideo[]>(url, this.httpOptions)
      .pipe(map(videos => videos.map(v => new Video(v))));
  }

  public selectVideo(videoId: any): Observable<IVideo> {
    return this.httpClient
      .get<IVideo>(`${url}/${videoId}`, this.httpOptions)
      .pipe(map(v => new Video(v)));
  }

  public getVideosByCategory(category: ICategory): Observable<IVideo[]> {
    return this.httpClient
      .get<IVideo[]>(`${url}/ByCategory/${category._id}`, this.httpOptions)
      .pipe(map(videos => videos.map(v => new Video(v))));
  }
}
