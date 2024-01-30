import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletsOptionsComponent } from './chalets-options.component';

describe('ChaletsOptionsComponent', () => {
  let component: ChaletsOptionsComponent;
  let fixture: ComponentFixture<ChaletsOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaletsOptionsComponent]
    });
    fixture = TestBed.createComponent(ChaletsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
