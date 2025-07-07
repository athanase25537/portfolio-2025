import { Component, input } from '@angular/core';
import { cardPortfolioModel } from '../../models/cardPortfolioModel';

@Component({
  selector: 'app-card-portfolio',
  imports: [],
  templateUrl: './card-portfolio.html',
  styleUrl: './card-portfolio.scss'
})
export class CardPortfolio {
  card = input<cardPortfolioModel>(
    new cardPortfolioModel(
      "assets/imgs/gemini.png",
      "Un chat bot utilisant l'api de Gemini pour une conversation d'un peu de tout.",
      "https://github.com/athanase25537/chat-gemini",
      ""
    )
  )
}
