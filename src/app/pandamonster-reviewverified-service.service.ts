import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, AuthService, Review } from '@spartacus/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';

export interface Product {
  productCode: String
  productName: String
}

@Injectable({
  providedIn: 'root'
})
export class PandamonsterReviewverifiedServiceService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { }


returnVerifiedReviees(reviews:Review[]): Observable<Review[]> {
  let data = reviews.map(review => review.id);
  return this.httpClient.post<string[]>("https://test.hack7.cluster.extend.cx.cloud.sap/verify/review",data).pipe(
    tap(a => console.log(a)),
    map(idsVerfied => reviews.map(review => { 
      return { ...review, verified: idsVerfied.indexOf(review.id) !== -1} as any; 
    } ))
    
  );
}
    
}
