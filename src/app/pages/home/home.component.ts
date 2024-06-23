import { Component, OnInit } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NgClass]
})
export class HomeComponent implements OnInit {
  isDark: boolean = false;

  constructor(
    private darkThemeService: DarkthemeService
  ){}

  ngOnInit(): void {
    this.isDark = this.darkThemeService.getDark();
    this.darkThemeService.darkThemeSetter.subscribe({
      next: () => {
        this.isDark = !this.isDark;
      }
    })
  }
}
