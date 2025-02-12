import { Injectable } from '@angular/core';
import { Language } from '../models/language';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  constructor() { }

  //Falso = Claro
  private theme: boolean = false;
  private allLanguages: Array<Language> =
    [
      {
        flag: "fi-br",
        language_id: "pt-BR",
        language_name: "Português (Brasil)"
      },
      {
        flag: "fi-us",
        language_id: "en-US",
        language_name: "English (United States)"
      },
      {
        flag: "fi-cn",
        language_id: "zh-Hans",
        language_name: "中国 (中国)"
      },
    ];

  private selectedLanguage: string = this.allLanguages[0].language_id;
  private lastLanguage: string = this.selectedLanguage;

  public selectedLanguage$ = new Observable<string>((observer) => {
    setInterval(() => {
      if (this.selectedLanguage != this.lastLanguage) {
        observer.next(this.selectedLanguage);
        this.lastLanguage = this.selectedLanguage;
      }
    });
  });

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

  public getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  public setSelectedLanguage(selectedLanguage: string): void {
    this.selectedLanguage = selectedLanguage;
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

  public getAllLanguages(): Array<Language> {
    return this.allLanguages;
  }

}
