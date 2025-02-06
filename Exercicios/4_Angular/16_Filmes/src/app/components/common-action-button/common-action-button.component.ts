import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-common-action-button',
  imports: [CommonModule],
  templateUrl: './common-action-button.component.html',
  styleUrl: './common-action-button.component.scss'
})
export class CommonActionButtonComponent {
  //É chamado por funções enviadas para este botão
  constructor(private getMoviesService: MoviesService) { }

  @Input() className: string = "";
  @Input() function!: () => void;

}
