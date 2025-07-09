import { Component, OnInit } from '@angular/core';
import { IconModel } from '../../models/iconModel';
import { IconService } from '../../icon-service';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-techno',
  imports: [Icon],
  templateUrl: './techno.html',
  styleUrl: './techno.scss'
})
export class Techno implements OnInit {

  icons!: IconModel[];

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.icons = this.iconService.getIcons();
  }
}
