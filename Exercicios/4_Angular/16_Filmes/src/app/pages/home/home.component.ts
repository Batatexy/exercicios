import { Component } from '@angular/core';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { SearchAreaComponent } from '../../components/search-area/search-area.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  imports: [BreadCrumbComponent, SearchAreaComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
