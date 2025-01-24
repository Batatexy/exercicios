import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-area',
  imports: [],
  templateUrl: './search-area.component.html',
  styleUrl: './search-area.component.scss'
})
export class SearchAreaComponent {
  @Input() movieCount: number = 0;

}
