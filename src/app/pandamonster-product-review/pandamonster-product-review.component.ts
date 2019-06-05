import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product, Review, ProductReviewService} from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';


@Component({
  selector: 'app-pandamonster-product-review',
  templateUrl: './pandamonster-product-review.component.html',
  styleUrls: ['./pandamonster-product-review.component.scss']
})
export class PandamonsterProductReviewComponent {
  
  isWritingReview = false;

// TODO: configurable
initialMaxListItems = 5;
maxListItems: number;
reviewForm: FormGroup;

product$: Observable<Product> = this.currentProductService.getProduct();

reviews$: Observable<Review[]> = this.product$.pipe(
  filter(Boolean),
  switchMap(product => this.reviewService.getByProductCode(product.code)),
  tap(() => {
    this.resetReviewForm();
    this.maxListItems = this.initialMaxListItems;
  })
);

constructor(
  protected reviewService: ProductReviewService,
  protected currentProductService: CurrentProductService,
  private fb: FormBuilder
) {}

initiateWriteReview(): void {
  this.isWritingReview = true;
}

cancelWriteReview(): void {
  this.isWritingReview = false;
  this.resetReviewForm();
}

setRating(rating): void {
  this.reviewForm.controls.rating.setValue(rating);
}

submitReview(product: Product): void {
  const reviewFormControls = this.reviewForm.controls;
  const review: Review = {
    headline: reviewFormControls.title.value,
    comment: reviewFormControls.comment.value,
    rating: reviewFormControls.rating.value,
    alias: reviewFormControls.reviewerName.value,
  };

  this.reviewService.add(product.code, review);

  this.isWritingReview = false;
  this.resetReviewForm();
}

private resetReviewForm(): void {
  this.reviewForm = this.fb.group({
    title: ['', Validators.required],
    comment: ['', Validators.required],
    rating: [0, [Validators.min(1), Validators.max(5)]],
    reviewerName: '',
  });
}
}