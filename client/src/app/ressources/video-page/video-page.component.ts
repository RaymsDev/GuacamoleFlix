import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from '../../../../../both/models/category.model';
import { IVideo } from '../../../../../both/models/video.model';
import { VideoService } from 'src/app/services/video.service';

interface ICategoryVideo {
  category: ICategory;
  videoList: IVideo[];
}

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  categoryVideoList: ICategoryVideo[];
  constructor(
    public categoryService: CategoryService,
    public videoService: VideoService
  ) {
    this.categoryVideoList = new Array<ICategoryVideo>();
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      categories.forEach(c => {
        this.videoService.getVideosByCategory(c).subscribe(videoList => {
          this.categoryVideoList.push({
            category: c,
            videoList: videoList
          });
        });
      });
    });
  }
}
