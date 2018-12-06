import { Injectable } from '@angular/core';
import { IVideo, Video } from '../../../../both/models/video.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { ICategory } from '../../../../both/models/category.model';
import { AuthService } from './auth.service';

const url = `${environment.urlApi}/videos`;

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  public getVideos(): Observable<IVideo[]> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IVideo[]>(url, httpOptions)
          .pipe(map(videos => videos.map(v => new Video(v))));
      }));
  }

  public selectVideo(videoId: any): Observable<IVideo> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IVideo>(`${url}/${videoId}`, httpOptions)
          .pipe(map(v => new Video(v)));
      }));

  }

  public getVideosByCategory(category: ICategory): Observable<IVideo[]> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IVideo[]>(`${url}/ByCategory/${category._id}`, httpOptions)
          .pipe(map(videos => videos.map(v => new Video(v))));
      }));

  }
}
