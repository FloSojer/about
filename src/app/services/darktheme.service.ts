import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkthemeService {
  isDark: boolean = true;
  darkThemeSetter: EventEmitter<boolean> = new EventEmitter<boolean>;

  constructor() {
    this.darkThemeSetter.subscribe(() => {
      this.isDark = !this.isDark;
    })
   }

  initialDark() {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    console.log('DARKTHEME', darkTheme);
    this.isDark = darkTheme.matches ? true : false;
  }

  resetDark() {
    this.darkThemeSetter.emit(this.isDark)
    
    this.isDark = !this.isDark;
  }

  getDark(): boolean {
    return this.isDark;
  }
}
