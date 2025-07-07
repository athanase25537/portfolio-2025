import { Injectable } from '@angular/core';
import { cardPortfolioModel } from '../models/cardPortfolioModel';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  myPortfolio: cardPortfolioModel[] = [
    new cardPortfolioModel(
      "assets/imgs/rendezvous.png",
      "Site de gestion de rendezvous et evolution de dossier pour un avocat.",
      "https://github.com/athanase25537/rendezvous",
      "https://rendezvous-1-k3uj.onrender.com"
    ),

    new cardPortfolioModel(
      "assets/imgs/portfolio.png",
      "Il donne plus d'information sur moi ainsi que mes réalisations.",
      "https://github.com/athanase25537/portfolio-2025",
      "#"
    ),

    new cardPortfolioModel(
      "assets/imgs/mvola.png",
      "Une documentation clair et simple sur l'utilisation de l'api MVola.",
      "https://github.com/athanase25537/mvolaapi",
      "https://mvolaapi.onrender.com/"
    ),

    new cardPortfolioModel(
      "assets/imgs/api.png",
      "API sur le modele de prédiction de prix d'un immobilier (California housing).",
      "https://github.com/athanase25537/california_housing",
      ""
    ),

    new cardPortfolioModel(
      "assets/imgs/gemini.png",
      "Un chat bot utilisant l'api de Gemini pour une conversation d'un peu de tout.",
      "https://github.com/athanase25537/chat-gemini",
      ""
    ),

    new cardPortfolioModel(
      "assets/imgs/quiz.png",
      "Une appication de quiz simple comportant de l'histoire et de la logique.",
      "https://github.com/athanase25537/quiz",
      ""
    )
  ];

  getMyPortfolio(): cardPortfolioModel[] {
    return this.myPortfolio;
  }
}
