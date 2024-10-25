import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  private readonly prefix = 'app_';
  private readonly authKey = 'auth';


  setAuthData(data: { token: string }): void {
    const item = {
      token: data.token,
    };

    localStorage.setItem(`${this.prefix}${this.authKey}`, JSON.stringify(item));
  }

  getAuthData(): { token: string } | null {
    const item = localStorage.getItem(`${this.prefix}${this.authKey}`);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  }
}
