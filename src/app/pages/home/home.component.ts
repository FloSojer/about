import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';
import { NgClass } from '@angular/common';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NgClass]
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor(
  ){}

  ngOnInit(): void {
    gsap.registerPlugin(Flip,ScrollTrigger);
  }

  ngAfterContentInit(): void {
    
  }
}
