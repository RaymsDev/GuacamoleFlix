import { Component, OnInit } from '@angular/core';
import { Category, ICategory } from './../../../../../both/models/category.model';
import { CategoryService } from '../../services/category.service';
import { VideoService } from 'src/app/services/video.service';
import { IVideo } from '../../../../../both/models/video.model';



@Component({
  selector: 'app-gestion-videos',
  templateUrl: './gestion-videos.component.html',
  styleUrls: ['./gestion-videos.component.scss']
})
export class GestionVideosComponent implements OnInit {

  Libelle: string;
  categoryselect: string;
  AllCategory: Array<ICategory>;
  categoryVideoList: ICategoryVideo[];
  constructor(private categoryService: CategoryService, public videoService: VideoService) {
    this.AllCategory = [];
    this.categoryVideoList = new Array<ICategoryVideo>();
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.categoryService.getCategories().subscribe(categories => {
      this.AllCategory = categories;
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

  getVideoList() {

  }

  deleteVideo(video: IVideo) {
    this.videoService.deleteVideo(video._id).subscribe(() => {
      this.categoryVideoList = this.removeVideoFromAllCategoryList(this.categoryVideoList, video);
    });
  }

  removeVideoFromAllCategoryList(categoryVideoList: ICategoryVideo[], video: IVideo) {
    const res = categoryVideoList.reduce((accumulator, current) => {

      const videoList = current.videoList.reduce((videoListAccumulator, currentVideo) => {
        if (currentVideo._id !== video._id) {
          return [
            ...videoListAccumulator,
            currentVideo
          ];
        }

        return videoListAccumulator;
      }, new Array<IVideo>());

      return [
        ...accumulator,
        {
          category: current.category,
          videoList: videoList
        }
      ];

    }, new Array<ICategoryVideo>());

    return res;
  }
}


interface ICategoryVideo {
  category: ICategory;
  videoList: IVideo[];
}
