import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../../both/models/category.model';
import { CategoryService } from '../../services/category.service';
import { VideoService } from '../../services/video.service';
import { Video, IVideo } from '../../../../../both/models/video.model';

@Component({
  selector: 'app-ajout-video-admin',
  templateUrl: './ajout-video-admin.component.html',
  styleUrls: ['./ajout-video-admin.component.scss']
})
export class AjoutVideoAdminComponent implements OnInit {
  Title: string;
  UrlVideo: string;
  AllCategorie: Array<Category>;
  LimitAge: string;
  Description: string;
  isSpotlight: boolean;
  idCat: number;
  isFail = false;
  isSuccess = false;
  constructor(private gestionCategory: CategoryService, private gestionVideo: VideoService) {
    this.Title = '';
    this.UrlVideo = '';
    this.idCat = 0;
    this.isSpotlight = false;
  }

  ngOnInit() {
    this.gestionCategory.getCategories().subscribe((allCat: Array<Category>) => {
      this.AllCategorie = allCat;
    });
  }

  AjoutVideo(): void {
    const Cat = new Array<Category>();
    Cat.push(this.AllCategorie[this.idCat]);
    const video = new Video({
      name: this.Title,
      categories: Cat,
      url: this.UrlVideo,
      description: this.Description,
      isSpotlight: this.isSpotlight
    });
    this.gestionVideo.createNewVideo(video).subscribe(() => {
      this.isSuccess = true;
      this.isFail = false;
    }, (error) => {
      this.isFail = true;
      this.isSuccess = false;
    });
  }

  CreateListCategorie(): Array<Category> {
    return null;
  }
}
