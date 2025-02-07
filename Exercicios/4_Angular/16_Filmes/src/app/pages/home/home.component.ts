import { Component } from '@angular/core';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { SearchAreaComponent } from '../../components/search-area/search-area.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [BreadCrumbComponent, SearchAreaComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
