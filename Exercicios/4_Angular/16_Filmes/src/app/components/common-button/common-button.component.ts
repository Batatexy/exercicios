import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-common-button',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {
  constructor(public GetMoviesService: MoviesService) { }

  @Input() className: string = "";
  @Input() route: string = "";
  @Input() active: string = "";
  @Input() exact: boolean = false;

  @Input() function!: () => void;
}
