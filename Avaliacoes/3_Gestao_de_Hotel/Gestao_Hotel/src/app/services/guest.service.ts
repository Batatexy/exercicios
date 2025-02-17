import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../model/guest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  public apiUrl = 'http://localhost:3000/guests';

  constructor(private http: HttpClient) { }

  public getGuest(id: number): Observable<Guest> {
    return this.http.get<Guest>(this.apiUrl + "/" + id);
  }

  public addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, { ...guest });
  }

  public editGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(this.apiUrl + "/" + guest.id, { ...guest });
  }

  public deleteGuest(id: number): Observable<Guest> {
    return this.http.delete<Guest>(this.apiUrl + "/" + id);
  }







}
