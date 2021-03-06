import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { IVideo } from '../../../../../both/models/video.model';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute, ParamMap } from '@angular/router';



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
  public relatedVideos: IVideo[];
  public isGuacaplayShow: boolean;
  public videoId: string;
  constructor(
    public videoService: VideoService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.videoId = params.get('id');
      this.isGuacaplayShow = true;
      const videoId = this.route.snapshot.params['id'];
      this.videoService.selectVideo(videoId)
        .subscribe(v => {
          this.watchingVideo = v;
          this.getRelatedVideos(v);
        });
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

  getRelatedVideos(video: IVideo) {
    this.videoService.getRelatedVideos(video)
      .subscribe(videos => {
        this.relatedVideos = videos.filter((v) => {
          if (v._id !== video._id) {
            return v;
          }
        });
      });
  }

  like(): void {
    this.videoService.likeVideo(this.watchingVideo)
      .subscribe(isLiked => {
        this.watchingVideo.isLikedByUser = isLiked;
      });
  }
}
