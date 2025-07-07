import { Component, OnInit } from '@angular/core';
import { cardPortfolioModel } from '../../models/cardPortfolioModel';
import { PortfolioService } from '../../services/portfolioService';
import { CommonModule } from '@angular/common';
import { CardPortfolio } from "../card-portfolio/card-portfolio";

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, CardPortfolio],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {

  cards!: cardPortfolioModel[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.cards = this.portfolioService.getMyPortfolio();
  }
}
