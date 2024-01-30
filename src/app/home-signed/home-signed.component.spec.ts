import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSignedComponent } from './home-signed.component';

describe('HomeSignedComponent', () => {
  let component: HomeSignedComponent;
  let fixture: ComponentFixture<HomeSignedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSignedComponent]
    });
    fixture = TestBed.createComponent(HomeSignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
