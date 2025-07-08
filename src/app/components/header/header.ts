import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  show: boolean = false;
  activeLink = "home";
  onClick() {
    this.show = !this.show;
  }


  onClickNav(value: string): void {
    this.activeLink = value;
    this.show = false;
  }
}
