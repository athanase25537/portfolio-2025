import { Injectable } from '@angular/core';
import { CardResumeModel } from '../models/cardResumeModel';

@Injectable({
  providedIn: 'root'
})
export class Myresume {

  private edcuationCards: CardResumeModel[] = [
    new CardResumeModel(
      "Bachelor lv 3 essia",
      "2023",
      "2024",
      "intitut superieur polytechnique de madagasar",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      true
    ),
    new CardResumeModel(
      "Preparatory year",
      "Jan 21",
      "Sep 21",
      "Program SESAME",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      false
    ),  

    new CardResumeModel(
      "Baccalaureat",
      "2019",
      "2020",
      "Lycee Presentation de Marie",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      false
    ),




  ];

  getEducationCards(): CardResumeModel[] {
    return this.edcuationCards;
  }

  private experienceCards: CardResumeModel[] = [
    new CardResumeModel(
      "Fullstack Django",
      "Fev 25",
      "Mai 25",
      "Freelance",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      false
    ),

    new CardResumeModel(
      "Fullstack PHP",
      "Jan 25",
      "Avr 25",
      "Full remote",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      false
    ),

    new CardResumeModel(
      "Stagiaire Backend",
      "Fev 25",
      "Jui 25",
      "Oceantrade du Group Viseo",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      false
    ),

    new CardResumeModel(
      "Stage Decouverte",
      "Oct 21",
      "Nov 21",
      "ingenosya madagasar",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla.",
      true
    ),
  ];

  getExperienceCards(): CardResumeModel[] {
    return this.experienceCards;
  }

  constructor() { }
}
