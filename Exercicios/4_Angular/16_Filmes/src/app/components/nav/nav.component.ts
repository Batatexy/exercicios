import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonButtonComponent } from "../common-button/common-button.component";

@Component({
  selector: 'app-nav',
  imports: [AvatarComponent, RouterLink, RouterLinkActive, CommonButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
