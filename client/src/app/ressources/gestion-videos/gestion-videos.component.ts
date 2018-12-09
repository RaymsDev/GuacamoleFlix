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
  AllCategory: Array<Category>;
  categoryVideoList: ICategoryVideo[];
  constructor(private categoryService: CategoryService, public videoService: VideoService) {
    this.AllCategory = [];
    this.categoryVideoList = new Array<ICategoryVideo>();
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((allCategory: Array<Category>) => {
      this.AllCategory = allCategory;
    });
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

  deleteVideo(id) {
    this.videoService.deleteVideo(id).subscribe(() => {
      this.categoryService.getCategories().subscribe(categories => {
        this.categoryVideoList = [];
        categories.forEach(c => {
          this.videoService.getVideosByCategory(c).subscribe(videoList => {
            this.categoryVideoList.push({
              category: c,
              videoList: videoList
            });
          });
        });
      });
    });
  }
}


interface ICategoryVideo {
  category: ICategory;
  videoList: IVideo[];
}
