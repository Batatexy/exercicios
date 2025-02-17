import { Component } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../model/guest';

@Component({
  selector: 'app-guest',
  imports: [],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.css'
})
export class GuestComponent {
  constructor(private getGuestService: GuestService) { }


  ngOnInit() {
    let newGuest: Guest = {
      id: 3,
      name: "Roberto",
      email: "Roberto@gmail.com",
      phone: "(16) 23234245343423",
      document: "468.345.646.12"
    };

    this.getGuestService.addGuest().subscribe({
      next();
    });

  }
}
