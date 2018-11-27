import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

const animation_timer = 3450;
@Component({
  selector: 'app-guaca-play',
  templateUrl: './guaca-play.component.html',
  styleUrls: ['./guaca-play.component.scss']
})
export class GuacaPlayComponent implements OnInit, AfterViewInit {
  @Output() isRealease = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isRealease.emit(true);
    }, animation_timer);
  }

}
