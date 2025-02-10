
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root',
})

export class ReviewsService {
  private apiUrl = 'http://localhost:3000';
  private httpOptionsDefault = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/users?id=${id}`
    );
  }

  public sendUser(user: User): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/users`, { ...user });
  }

  public getReviews(movieID?: number): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(
      `${this.apiUrl}/reviews?movieID=${movieID}`
    );
  }

  public sendReview(review: Review): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/reviews`, { ...review });
  }
}


