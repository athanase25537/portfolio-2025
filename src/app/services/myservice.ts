import { Injectable } from '@angular/core';
import { CardModel } from '../models/cardModel';

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  cards: CardModel[] = [
    new CardModel(
      'fa-solid fa-code',
      'Backend Development',
      'Building and maintaining robust APIs with FastAPI or PHP, including integrations with protocols such as OCPP.'
    ),

    new CardModel(
      'fa-solid fa-globe',
      'Full-Stack Development',
      'Developing dynamic web applications using Angular, Django, Twig, JavaScript, and Bootstrap.'
    ),

    new CardModel(
      'fa-solid fa-robot',
      'Machine Learning',
      'Designing predictive machine learning models with Python, Scikit-learn, TensorFlow, and PyTorch.'
    ),

    new CardModel(
      'fa-solid fa-gears',
      'Automation',
      'Creating Python scripts to automate repetitive tasks and solve algorithmic problems.'
    ),
  ]

  getCards(): CardModel[] {
    return this.cards;
  }
  constructor() { }
}
