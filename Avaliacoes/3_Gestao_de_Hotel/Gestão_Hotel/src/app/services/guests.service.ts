
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

  public getGuestByID(id: number): Observable<Guest> {
    return this.http.get<Guest>(`${this.apiUrl}?id=${id}`);
  }

  public addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(`${this.apiUrl}`, { ...guest });
  }




  public deleteGuestByID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);  // Corrigido: Enviar o id como parte da URL
  }

  public editGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}?id=${guest.id}`, { ...guest });  // Corrigido: Usar o id na URL
  }
}
