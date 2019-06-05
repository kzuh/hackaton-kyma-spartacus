import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product-service.service';
import { Inject } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-product-popup',
  templateUrl: './review-product-popup.component.html',
  styleUrls: ['./review-product-popup.component.scss']
})
export class ReviewProductPopupComponent implements OnInit {
  products$:Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products$= this.productService.getProducts();
  }
  ngOnInit() {
    
  }

}
