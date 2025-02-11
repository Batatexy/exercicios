
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userID = 2;

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getUser(id: number): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/users?id=${id}`);
  }

  public sendUser(user: User): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/users`, { ...user });
  }

  public getUserID(): number {
    return this.userID;
  }
}


