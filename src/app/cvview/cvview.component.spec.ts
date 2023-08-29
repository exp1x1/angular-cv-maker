import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvviewComponent } from './cvview.component';

describe('CvviewComponent', () => {
  let component: CvviewComponent;
  let fixture: ComponentFixture<CvviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
