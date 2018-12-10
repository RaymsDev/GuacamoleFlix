import { Injectable } from '@angular/core';
import { IVideo, Video } from '../../../../both/models/video.model';
import { ILike } from '../../../../both/models/like.model';
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
  public getVideosSpotlight(): Observable<IVideo[]> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IVideo[]>(`${url}/spotlight`, httpOptions)
          .pipe(map(videos => videos.map(v => new Video(v))));
      }));

  }
  public getRelatedVideos(video: IVideo): Observable<IVideo[]> {
    const videoIdList = video.categories.reduce((accumulator, current, i) => {
      if (i !== 0) {
        accumulator += ',';
      }

      accumulator += current._id;
      return accumulator;
    }, '');
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient
          .get<IVideo[]>(`${url}/RelatedVideos/${videoIdList}`, httpOptions)
          .pipe(map(videos => videos.map(v => new Video(v))));
      }));

  }

  public deleteVideo(id): Observable<any> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.delete(`${url}/${id}`, httpOptions);
      }));
  }


  createNewVideo(video): Observable<any> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.post(`${url}/`, video, httpOptions);
      }));
  }

  likeVideo(video): Observable<boolean> {
    return this.authService.getHttpOptions
      .pipe(flatMap((httpOptions) => {
        return this.httpClient.post<boolean>(`${url}/like/${video._id}`, {}, httpOptions);
      }));
  }
}
