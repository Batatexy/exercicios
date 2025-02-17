import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  public apiUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) { }

  public getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "?id=" + id);
  }

  public addReservation(Reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, { ...Reservation });
  }

  public editReservation(Reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(this.apiUrl + "/" + Reservation.id, { ...Reservation });
  }

  public deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(this.apiUrl + "/" + id);
  }


}
