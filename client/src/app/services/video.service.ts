import { Injectable } from '@angular/core';
import { IVideo, Video } from '../../../../both/models/video.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from '../../../../both/models/category.model';

const url = `${environment.urlApi}/videos`;

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private httpClient: HttpClient) {}

  public getVideos(): Observable<IVideo[]> {
    return this.httpClient
      .get<IVideo[]>(url)
      .pipe(map(videos => videos.map(v => new Video(v))));
  }

  public getVideosByCategory(category: ICategory): Observable<IVideo[]> {
    return this.httpClient
      .get<IVideo[]>(`${url}/ByCategory/${category._id}`)
      .pipe(map(videos => videos.map(v => new Video(v))));
  }
}
