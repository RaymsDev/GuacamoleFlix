import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVideoAdminComponent } from './ajout-video-admin.component';

describe('AjoutVideoAdminComponent', () => {
  let component: AjoutVideoAdminComponent;
  let fixture: ComponentFixture<AjoutVideoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutVideoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVideoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
