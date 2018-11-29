import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../../both/models/category.model'

@Component({
  selector: 'app-ajout-video-admin',
  templateUrl: './ajout-video-admin.component.html',
  styleUrls: ['./ajout-video-admin.component.scss']
})
export class AjoutVideoAdminComponent implements OnInit {
  Title: String
  UrlVideo: String
  AllCategorie: Array<String>
  LimitAge: String
  Description: String

  constructor() 
  {
    this.Title = ""
    this.UrlVideo = ""
  }

  ngOnInit() {
  }

  AjoutVideo() : void
  {
    
  }

  CreateListCategorie() : Array<Category>
  {
    return null
  }
}
