import { Component, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-action-button',
  imports: [CommonModule],
  templateUrl: './common-action-button.component.html',
  styleUrl: './common-action-button.component.scss'
})
export class CommonActionButtonComponent {
  constructor(public GetMoviesService: MoviesService) { }

  @Input() className: string = "";
  @Input() function!: () => void;

}
