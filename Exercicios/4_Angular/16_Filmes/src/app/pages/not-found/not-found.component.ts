import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonRouterButtonComponent } from '../../components/common-router-button/common-router-button.component';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, CommonRouterButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
