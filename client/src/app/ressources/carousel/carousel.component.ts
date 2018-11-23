import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from '../../../../../both/models/video.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() videoList: IVideo[];
  constructor() {}

  ngOnInit() {}
}
