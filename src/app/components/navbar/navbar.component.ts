import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DarkthemeService } from '../../services/darktheme.service';
import { faPersonBiking, faMoon, faSun, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonLight} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  menuOpen: boolean = false;
  route: string = '';

  icons = {
    personBiking: faPersonBiking,
    moon: faMoon,
    sun: faSun,
    moonLight: faMoonLight,
    bars: faBars,
    x: faX
  }

  pages: string[] = [
    '',
    'home'
  ]

  constructor(
    public router: Router
  ){
  }

  ngOnInit(): void {

    this.router.events.subscribe((value) => {
      if(value instanceof NavigationEnd) {  
        this.route = this.router.url.toString();
        console.log('Route', this.router.url.toString());
      }
    })
  }

  setMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(path: string){
    this.router.navigate([path]);
    this.menuOpen = false;
  }
}
