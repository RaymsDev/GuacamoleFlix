import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { IVideo } from '../../../../../both/models/video.model';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit, AfterViewInit {
  @ViewChild('containerRef', { read: ElementRef }) containerRef: ElementRef;
  public playerHeight: number;
  public playerWidth: number;
  public watchingVideo: IVideo;
  isGuacaplayShow: boolean;
  constructor(
    public videoService: VideoService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isGuacaplayShow = true;
    const videoId = this.route.snapshot.params['id'];
    this.videoService.selectVideo(videoId)
      .subscribe(v => {
        this.watchingVideo = v;
      });
  }

  ngAfterViewInit(): void {
    const container: HTMLElement = this.containerRef.nativeElement;
    this.playerHeight = container.offsetHeight;
    this.playerWidth = container.offsetWidth;
  }

  onGenericFinish(isFinish): void {
    this.isGuacaplayShow = false;
  }
}
