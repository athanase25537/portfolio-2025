import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconModel } from '../../models/iconModel';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  icon = input<IconModel>(new IconModel(
    "fa-brands fa-angular",
    "angular",
    false
  ));
}
