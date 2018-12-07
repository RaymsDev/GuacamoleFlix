import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from '../../../../../both/models/category.model';
import { IVideo } from '../../../../../both/models/video.model';
import { VideoService } from 'src/app/services/video.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  categoryVideoList: ICategoryVideo[];
  isAuth: boolean;
  constructor(
    public authService: AuthService,
    public categoryService: CategoryService,
    public videoService: VideoService
  ) {
    this.categoryVideoList = new Array<ICategoryVideo>();
  }

  ngOnInit() {
    this.authService.userObservable.subscribe((user) => {
      this.isAuth = user ? true : false;
      if (user) {
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
    });

  }
}



interface ICategoryVideo {
  category: ICategory;
  videoList: IVideo[];
}
