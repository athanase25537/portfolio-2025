import { Component } from '@angular/core';
import { CardResumeModel } from '../../models/cardResumeModel';
import { CardResume } from "../card-resume/card-resume";

@Component({
  selector: 'app-school-resume',
  imports: [CardResume],
  templateUrl: './school-resume.html',
  styleUrl: './school-resume.scss'
})
export class SchoolResume {
  card1 = new CardResumeModel(
    "Bachelor lv 1 essia",
    2021,
    2022,
    "intitut superieur polytechnique de madagasar",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
    false
  )

  card2 = new CardResumeModel(
    "Bachelor lv 2 essia",
    2023,
    2024,
    "intitut superieur polytechnique de madagasar",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
    true
  )


}
