import { Component } from '@angular/core';
import { Guest } from '../../models/guest';
import { GuestsService } from '../../services/guests.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-guests',
  imports: [RouterLink],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent {
  constructor(private getGuestsService: GuestsService, private getActivatedRoute: ActivatedRoute) { }

  guests: Array<Guest> = [];
  guest?: Guest;

  id?: number;

  ngOnInit() {
    console.clear();
    this.id = Number(this.getActivatedRoute.snapshot.paramMap.get("id"));

    if (this.id) {
      this.getGuestsService.getGuestByID(this.id).subscribe({
        next: (guest) => { this.guest = guest[0]; },

        complete: () => {
          console.log(this.guest);
        }
      });
    }
    else {
      this.getGuestsService.getGuests().subscribe({
        next: (guests) => {
          this.guests = guests;
        },

        complete: () => {
          console.log(this.guests);
        }
      });
    }
  }
}
