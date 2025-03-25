import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private apiUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>(`${this.apiUrl}`);
  }

  public getReservationByID(id: string): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>(`${this.apiUrl}?id=${id}`);
  }

  public getReservationByGuestId(guestId: string): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>(`${this.apiUrl}?guestId=${guestId}`);
  }



  public addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}`, { ...reservation });
  }

  public editReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/${reservation.id}`, { ...reservation });
  }

  public deleteReservationByID(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
