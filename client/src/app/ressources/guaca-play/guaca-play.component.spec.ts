import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuacaPlayComponent } from './guaca-play.component';

describe('GuacaPlayComponent', () => {
  let component: GuacaPlayComponent;
  let fixture: ComponentFixture<GuacaPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuacaPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuacaPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
