import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-design',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {

}
