import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-common-router-button',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './common-router-button.component.html',
  styleUrl: './common-router-button.component.scss'
})
export class CommonRouterButtonComponent {

  constructor(public GetMoviesService: MoviesService, private route: ActivatedRoute) { }

  @Input() className: string = "";
  @Input() router: string = "";
  @Input() active: string = "";
  @Input() exact: boolean = false;  


}
