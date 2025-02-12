import { Component } from '@angular/core';
import { SearchAreaComponent } from '../../components/search-area/search-area.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [SearchAreaComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
