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
  public isGuacaplayShow: boolean;
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
    this.fitPage();
  }

  private fitPage() {
    const myContainer: HTMLElement = this.containerRef.nativeElement;
    this.playerHeight = myContainer.offsetHeight;
    this.playerWidth = myContainer.offsetWidth;
  }

  onGenericFinish(isFinish): void {
    this.isGuacaplayShow = false;
    this.fitPage();
  }

  like(): void {
    this.videoService.likeVideo(this.watchingVideo)
      .subscribe(isLiked => {
        this.watchingVideo.isLikedByUser = isLiked;
      });
  }
}
