import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandamonsterProductReviewComponent } from './pandamonster-product-review.component';

describe('PandamonsterProductReviewComponent', () => {
  let component: PandamonsterProductReviewComponent;
  let fixture: ComponentFixture<PandamonsterProductReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandamonsterProductReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandamonsterProductReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
