import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-common-router-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './common-router-button.component.html',
  styleUrl: './common-router-button.component.scss'
})
export class CommonRouterButtonComponent {

  @Input() className: string = "";
  @Input() router: string = "";
  @Input() routes: Array<string> = []
  @Input() activeClass: string = "";

  constructor(private GetRouter: Router) { }

  isActive(): boolean{

    let returnActive: boolean = false;
    this.routes.forEach(route => 
    {
      if ((route != "/" && this.GetRouter.url.startsWith(route)) || route == this.GetRouter.url) 
      {
        returnActive = true
      }
    });

    return returnActive;
  }
}
