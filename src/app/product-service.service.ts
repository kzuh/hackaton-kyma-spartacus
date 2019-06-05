import { Injectable } from '@angular/core';
import { product } from '@spartacus/storefront/translations/en/product.en';
import { Observable, of } from 'rxjs';

export interface Product {
  code:String
  name:String
}



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  getProducts():Observable<Product[]>{
    return of([{code: "P-123", name: "Super P-123"},{code: "P-321", name: "Super P-321"}]);
  }
}
