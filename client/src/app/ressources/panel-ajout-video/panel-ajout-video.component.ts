import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-panel-ajout-video',
  templateUrl: './panel-ajout-video.component.html',
  styleUrls: ['./panel-ajout-video.component.scss']
})
export class PanelAjoutVideoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AccessAdmin()
  {
    console.log("test")
    this.router.navigate(['/login']);
  }
}
