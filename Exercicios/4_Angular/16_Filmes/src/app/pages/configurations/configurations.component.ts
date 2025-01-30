import { Component, Input } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { ConfigurationsService } from '../../services/configurations.service';

@Component({
  selector: 'app-configurations',
  imports: [TitleComponent, BreadCrumbComponent, WhiteCardComponent],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.scss'
})
export class ConfigurationsComponent {
  constructor(public GetConfigurationsService: ConfigurationsService) { }
}
