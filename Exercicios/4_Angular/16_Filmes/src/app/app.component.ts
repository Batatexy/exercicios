import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationsService } from './services/configurations.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private getConfigurationsService: ConfigurationsService) { }

  ngOnInit() {

    if (this.getConfigurationsService.getThemeLocalStorage()) {
      this.getConfigurationsService.switchTheme("0");
    }
  }
}
