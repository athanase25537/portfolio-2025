import { Injectable } from '@angular/core';
import { CardModel } from '../models/cardModel';

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  cards: CardModel[] = [
    new CardModel(
      'fa-solid fa-code',
      'Dev Backend',
      'Création et maintenance d\'API robustes avec FastAPI ou PHP natif, intégration de protocoles comme OCPP.'
    ),

    new CardModel(
      'fa-solid fa-globe',
      'Dev Fullstack',
      'Développement de sites web dynamiques en utilisant Angular, Django, Twig, JavaScript, Bootstrap.'
    ),

    new CardModel(
      'fa-solid fa-robot',
      'M. Learning',
      'Conception de modèles prédictifs avec Python, Scikit-learn, TensorFlow et XGBoost.'
    ),

    new CardModel(
      'fa-solid fa-gears',
      'Automatisme',
      'Création de scripts Python pour automatiser des tâches répétitives ou résoudre des problèmes algorithmiques.'
    ),
  ]

  getCards(): CardModel[] {
    return this.cards;
  }
  constructor() { }
}
