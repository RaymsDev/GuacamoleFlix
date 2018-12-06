import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../../both/models/category.model';

@Component({
  selector: 'app-ajout-video-admin',
  templateUrl: './ajout-video-admin.component.html',
  styleUrls: ['./ajout-video-admin.component.scss']
})
export class AjoutVideoAdminComponent implements OnInit {
  Title: string;
  UrlVideo: string;
  AllCategorie: Array<string>;
  LimitAge: string;
  Description: string;
  Humour: boolean;
  Action: boolean;
  Vlog: boolean;
  Horreur: boolean;
  Animal: boolean;
  JeuxV: boolean;
  Voyage: boolean;
  Beaute: boolean;
  Sport: boolean;
  Histoire: boolean;
  Musique: boolean;
  Autre: boolean;

  constructor() {
    this.Title = '';
    this.UrlVideo = '';
  }

  ngOnInit() {
  }

  AjoutVideo(): void {

  }

  CreateListCategorie(): Array<Category> {
    return null;
  }
}
