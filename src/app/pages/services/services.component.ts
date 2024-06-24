import { Component, OnInit } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  constructor(
  ){}

  ngOnInit(): void {

  }
}
