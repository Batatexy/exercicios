
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userID = 1;
  private user?: User;
  private favoritesMovies: Array<Movie> = [];

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  // public getUserFavoriteMovies(userID?: number): Observable<Array<number>> {
  //   return this.http.get<Array<number>>(`${this.apiUrl}/users?id=${userID}`).pipe(map(user => user));;
  // }

  // public sendFavoriteMovie(userID: number, movieID: number): Observable<unknown> {
  //   return this.http.post<unknown>(`${this.apiUrl}/users?id=${userID}`, { ...movieID });
  // }

  public setFavoriteMovie(movieID: number) {
    if (this.user) {
      let push: boolean = true;

      for (let i = 0; i < this.user.favorites.length; i++) {
        if (this.user.favorites[i] == movieID) {
          this.user.favorites.splice(i, 1);
          push = false;
        }
      }

      if (push) {
        this.user.favorites.push(movieID);
      }

      this.setUser(
        this.user).subscribe({});
    }
  }



  public removeFavoriteMovie(userID: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/users?id=${userID}`);
  }



  public getUser$(id: number): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/users?id=${id}`);
  }



  public sendUser(user: User): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/users`, { ...user });
  }

  public setUser(user: User): Observable<unknown> {
    return this.http.put<unknown>(`${this.apiUrl}/users/${user.id}`, { ...user });
  }




  public getUserID(): number {
    return this.userID;
  }



  public getActualUser(): User | undefined {
    return this.user;
  }

  public setActualUser(user: User): void {
    this.user = user;
  }



  public setFavoritesMovies(favoritesMovies: Array<Movie>): void {
    this.favoritesMovies = favoritesMovies;
  }

  public getFavoritesMovies(): Array<Movie> {
    return this.favoritesMovies;
  }

  public addFavoritesMovies(movie: Movie): void {
    this.favoritesMovies.push(movie);
  }
}


