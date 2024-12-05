import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  darkModeSignal = signal<boolean>(true);

  constructor() {
    this.darkModeSignal.set(this.darkMode);
  }

  updateDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeSignal.set(this.darkMode);
  }

  private set darkMode(value: boolean) {
    localStorage.setItem('darkMode', JSON.stringify(value));
  }

  private get darkMode(): boolean {
    const darkModeFromStorage = localStorage.getItem('darkMode');
    if (darkModeFromStorage !== null) {
      return JSON.parse(darkModeFromStorage);
    }
    return false;
  }

}
