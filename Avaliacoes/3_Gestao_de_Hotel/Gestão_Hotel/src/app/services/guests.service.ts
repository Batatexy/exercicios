
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root',
})

export class GuestsService {
  private apiUrl = 'http://localhost:3000/guests';

  constructor(private http: HttpClient) { }

  public getGuests(): Observable<Array<Guest>> {
    return this.http.get<Array<Guest>>(`${this.apiUrl}`);
  }

  public getGuestByID(id: number): Observable<Array<Guest>> {
    return this.http.get<Array<Guest>>(`${this.apiUrl}?id=${id}`);
  }

  public getGuestByEmail(email: string): Observable<Array<Guest>> {
    return this.http.get<Array<Guest>>(`${this.apiUrl}?email=${email}`);
  }

  public getGuestByDocument(document: string): Observable<Array<Guest>> {
    return this.http.get<Array<Guest>>(`${this.apiUrl}?document=${document}`);
  }



  public addGuest(guest: Guest): Observable<Guest> {
    guest.id = String(guest.id);
    return this.http.post<Guest>(`${this.apiUrl}`, { ...guest });
  }

  public editGuest(guest: Guest): Observable<Guest> {
    guest.id = String(guest.id);
    return this.http.put<Guest>(`${this.apiUrl}/${guest.id}`, { ...guest });
  }

  public deleteGuestByID(id: number | string): Observable<void> {
    id = String(id);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
