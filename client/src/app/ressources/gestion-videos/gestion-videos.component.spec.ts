import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVideosComponent } from './gestion-videos.component';

describe('GestionVideosComponent', () => {
  let component: GestionVideosComponent;
  let fixture: ComponentFixture<GestionVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
