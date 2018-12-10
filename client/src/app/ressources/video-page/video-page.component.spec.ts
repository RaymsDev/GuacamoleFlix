import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPageComponent } from './video-page.component';

describe('VideoPageComponent', () => {
  let component: VideoPageComponent;
  let fixture: ComponentFixture<VideoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
