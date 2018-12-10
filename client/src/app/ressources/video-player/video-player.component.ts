import { Component, OnInit, Input } from '@angular/core';
import { IVideo, Video } from './../../../../../both/models/video.model';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: IVideo;
  public player: YT.Player;
  @Input() playerHeight: number;
  @Input() playerWidth: number;
  public height: number;
  public width: number;
  constructor() { }

  ngOnInit() {
    this.height = this.playerHeight || 315;
    this.width = this.playerWidth || 560;
  }

  savePlayer(player) {
    this.player = player;
    this.player.playVideo();
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
