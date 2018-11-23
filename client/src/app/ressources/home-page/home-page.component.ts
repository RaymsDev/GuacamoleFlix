import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { IVideo } from '../../../../../both/models/video.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  videoList: IVideo[];
  constructor(public videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getVideos().then(videoList => {
      this.videoList = videoList;
    });
  }
}
