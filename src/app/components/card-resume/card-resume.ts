import { Component, input } from '@angular/core';
import { CardResumeModel } from '../../models/cardResumeModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-resume.html',
  styleUrl: './card-resume.scss'
})
export class CardResume {
  card = input<CardResumeModel>(
    new CardResumeModel(
      "Bachelor lv 1 essia",
      2021,
      2022,
      "intitut superieur polytechnique de madagasar",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      false
    )
  );
}
