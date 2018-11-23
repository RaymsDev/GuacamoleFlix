import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from './../../../../../both/models/video.model';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: IVideo;

  player: YT.Player;
  private id: string;
  private height: number;
  private width: number;
  constructor() { }

  ngOnInit() {
    this.height = 315;
    this.width = 560;
    this.id = this.extractYoutubeId(this.video.url);
  }

  private extractYoutubeId(url: string): string {
    const regex = /(?:\?|\&)([v=]+)\=([^&]+)/gm;
    const matchs = regex.exec(url);
    if (matchs) {
      return matchs[2];
    }

    return null;
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }


}
