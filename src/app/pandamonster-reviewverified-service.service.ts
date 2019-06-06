import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, AuthService, Review } from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

export interface Product {
  productCode: String
  productName: String
}

@Injectable({
  providedIn: 'root'
})
export class PandamonsterReviewverifiedServiceService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { }


  getProducts(): Observable<string[]> {
    // return this.authService.getUserToken().pipe(
    //   map(userToken => userToken.userId),
    //   switchMap(userId => this.getProductsByUserId(userId))

      return of(["8796191522865"]);
  }


returnVerifiedReviees(reviews:Review[]): Observable<Review[]> {

  
    //  for(let review of reviews){
    //    //review['verified'] = true;
    //  }

    return of(reviews.map(review => ({...review, verified: true} as any)));
}
    
}
