import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {
  //Falso = Claro
  private theme: boolean = false;
  private language = "pt-BR";

  constructor() { }

  public switchTheme(seconds: string): void {
    let body = document.body.style;
    body.setProperty("--transition-theme-time", seconds);

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

    this.setThemeLocalStorage(this.theme);
  }

  public getTheme(): boolean {
    return this.theme;
  }

  public getLanguage(): string {
    return this.language;
  }

  public setThemeLocalStorage(theme: boolean): void {
    localStorage.setItem("userTheme", JSON.stringify(theme));
  }

  public getThemeLocalStorage(): boolean | null {
    let theme = localStorage.getItem("userTheme");
    if (theme == null) {
      return false;
    }
    return JSON.parse(theme);
  }


}
