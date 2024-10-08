import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setSession(value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('session', value);
    }
  }

  getSession(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('session');
    }
    return null;
  }

  removeSession(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('session');
    }
  }
}