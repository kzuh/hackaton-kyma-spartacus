import { Injectable } from '@angular/core';
import { product } from '@spartacus/storefront/translations/en/product.en';
import { Observable, of } from 'rxjs';
import { AuthService } from '@spartacus/core';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
export interface Product {
  productCode: String
  productName: String
}



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.authService.getUserToken().pipe(
      map(userToken => userToken.userId),
      switchMap(userId => this.getProductsByUserId(userId))
    )

    //return of([{code: "P-123", name: "Super P-123"},{code: "P-321", name: "Super P-321"}]);
  }
  private getProductsByUserId(userId:String){
    return this.httpClient.get<Product[]>(`https://test.hack7.cluster.extend.cx.cloud.sap/${userId}/reviews`)
  }
}
