import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{

}
