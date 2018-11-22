import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { loginForm } from './login-form';

describe('PanelAjoutVideoComponent', () => {
  let component: loginForm;
  let fixture: ComponentFixture<loginForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ loginForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loginForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
