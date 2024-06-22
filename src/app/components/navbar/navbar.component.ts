import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen: boolean = false;
  profileMenuOpen: boolean = false;

  pages: string[] = [
    '',
    'home'
  ]

  constructor(
    public router: Router
  ){

  }

  setMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }
}
