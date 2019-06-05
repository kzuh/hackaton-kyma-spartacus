import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProductPopupComponent } from './review-product-popup.component';

describe('ReviewProductPopupComponent', () => {
  let component: ReviewProductPopupComponent;
  let fixture: ComponentFixture<ReviewProductPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewProductPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
