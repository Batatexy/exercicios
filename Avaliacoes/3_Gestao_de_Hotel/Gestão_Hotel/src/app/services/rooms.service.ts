import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>(`${this.apiUrl}`);
  }
}
