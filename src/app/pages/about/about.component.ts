import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
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
