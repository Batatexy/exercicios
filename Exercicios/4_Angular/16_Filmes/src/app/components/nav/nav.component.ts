import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommonRouterButtonComponent } from "../common-router-button/common-router-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [AvatarComponent, CommonRouterButtonComponent, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
