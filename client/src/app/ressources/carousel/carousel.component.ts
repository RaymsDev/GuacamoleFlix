import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from '../../../../../both/models/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() videoList: IVideo[];
  constructor(private router: Router) { }

  ngOnInit() { }

  public navigate(video: IVideo): void {
    this.router.navigate(['video', video._id]);
  }
}
