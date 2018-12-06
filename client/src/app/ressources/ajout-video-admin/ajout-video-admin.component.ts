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
  idCat: number;

  constructor(private gestionCategory: CategoryService, private gestionVideo: VideoService) {
    this.Title = '';
    this.UrlVideo = '';
    this.idCat = 0;
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
      image: 'https://www.google.fr/ne_vous_inquietez_pas_c_normal_url_pourris_a_cause_du_require#onestdesole#RIPguacaflix',
      isSpotlight: false
    });
    this.gestionVideo.createNewVideo(video).subscribe(() => {
      console.log('video ajouté');
    });
  }

  CreateListCategorie(): Array<Category> {
    return null;
  }
}
