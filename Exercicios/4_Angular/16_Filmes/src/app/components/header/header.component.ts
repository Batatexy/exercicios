import { Component, Input } from '@angular/core';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { Movie } from '../../models/movie';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  imports: [BreadCrumbComponent, LanguageSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
