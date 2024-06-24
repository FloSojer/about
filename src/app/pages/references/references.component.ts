import { Component, OnInit } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NgClass],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
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
