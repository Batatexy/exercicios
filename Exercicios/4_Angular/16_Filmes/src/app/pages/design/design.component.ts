import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-design',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {

}
