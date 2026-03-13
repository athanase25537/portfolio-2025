import { Injectable } from '@angular/core';
import { cardPortfolioModel } from '../models/cardPortfolioModel';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  myPortfolio: cardPortfolioModel[] = [
    new cardPortfolioModel(
      "assets/imgs/my-shop.png",
      "Boutique en ligne avec navigation par catégories et mise en avant des produits.",
      "https://github.com/athanase25537/e-commerce",
      "https://my-shop-1yly.onrender.com/"
    ),

    new cardPortfolioModel(
      "assets/imgs/rendezvous.png",
      "Appointment and case-tracking management platform built for a lawyer.",
      "https://github.com/athanase25537/rendezvous",
      "https://rendezvous-1-k3uj.onrender.com"
    ),

    new cardPortfolioModel(
      "assets/imgs/portfolio.png",
      "A portfolio website presenting my background and projects.",
      "https://github.com/athanase25537/portfolio-2025",
      "#"
    ),

    new cardPortfolioModel(
      "assets/imgs/mvola.png",
      "Clear and simple documentation for using the MVola API.",
      "https://github.com/athanase25537/mvolaapi",
      "https://mvolaapi.onrender.com/"
    ),

    new cardPortfolioModel(
      "assets/imgs/api.png",
      "API for a real estate price prediction model (California Housing dataset).",
      "https://github.com/athanase25537/california_housing",
      ""
    ),

    new cardPortfolioModel(
      "assets/imgs/gemini.png",
      "A chatbot powered by the Gemini API for general-purpose conversations.",
      "https://github.com/athanase25537/chat-gemini",
      ""
    ),

    new cardPortfolioModel(
      "assets/imgs/quiz.png",
      "A simple quiz application featuring history and logic questions.",
      "https://github.com/athanase25537/quiz",
      ""
    )
  ];

  getMyPortfolio(): cardPortfolioModel[] {
    return this.myPortfolio;
  }
}
