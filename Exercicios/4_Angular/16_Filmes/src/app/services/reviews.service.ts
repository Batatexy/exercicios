
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root',
})

export class ReviewsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getReviewsByMovieID(movieID?: number): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(
      `${this.apiUrl}/reviews?movieID=${movieID}`
    );
  }

  public sendReview(review: Review): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/reviews`, { ...review });
  }




}


