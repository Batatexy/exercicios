import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {
  //Falso = Claro
  private theme: boolean = false;

  constructor() { }

  public switchTheme(): void {
    let body = document.body.style;
    console.log(body);

    if (this.theme) {

      this.theme = false;
      body.setProperty("--background-default-color", "#EFEFEF");
      body.setProperty("--foreground-default-color", "white");
      body.setProperty("--text-default-color", "black");
      body.setProperty("--searchbar-text-color", "#4B5563");
    }
    else {
      this.theme = true;
      body.setProperty("--background-default-color", "rgb(41, 41, 41)");
      body.setProperty("--foreground-default-color", "rgb(57, 57, 57)");
      body.setProperty("--text-default-color", "white");
      body.setProperty("--searchbar-text-color", "white");
    }
  }

  public getTheme(): boolean {
    return this.theme;
  }
}
