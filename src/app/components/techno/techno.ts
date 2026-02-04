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

  skillGroups: {
    title: string;
    description: string;
    icons: IconModel[];
  }[] = [];

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    const icons = this.iconService.getIcons();
    const iconMap = new Map(icons.map((icon) => [icon.legend, icon]));
    const pick = (names: string[]) =>
      names
        .map((name) => iconMap.get(name))
        .filter((icon): icon is IconModel => icon !== undefined);

    this.skillGroups = [
      {
        title: 'Front-End',
        description: 'Modern, responsive, and accessible web interfaces.',
        icons: pick(['angular', 'html5', 'css3', 'javascript', 'typescript', 'bootstrap'])
      },
      {
        title: 'Back-End',
        description: 'APIs, business logic, and high-performance frameworks.',
        icons: pick(['python', 'php', 'django', 'fastapi'])
      },
      {
        title: 'DevOps',
        description: 'Containerization and delivery workflows.',
        icons: pick(['docker'])
      }
    ];
  }
}
