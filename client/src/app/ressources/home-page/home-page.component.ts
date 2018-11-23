import { Component, OnInit } from '@angular/core';
import { IVideo, Video } from '../../../../../both/models/video.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  video: IVideo;
  constructor() { }

  ngOnInit() {
    this.video = new Video();
    this.video.url = 'https://www.youtube.com/watch?v=AcHHE9bvLgY&list=RDEMTu0-9DPVqfCOk6wg2A030Q&index=2';
  }

}
