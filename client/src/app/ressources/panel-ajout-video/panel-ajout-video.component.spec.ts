import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAjoutVideoComponent } from './panel-ajout-video.component';

describe('PanelAjoutVideoComponent', () => {
  let component: PanelAjoutVideoComponent;
  let fixture: ComponentFixture<PanelAjoutVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAjoutVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAjoutVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
