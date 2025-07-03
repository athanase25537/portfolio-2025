import { Component, OnInit } from '@angular/core';
import { Card } from "../card/card";
import { CardModel } from '../../models/cardModel';
import { Myservice } from '../../services/myservice';

@Component({
  selector: 'app-myservices',
  standalone: true,
  imports: [Card],
  templateUrl: './myservices.html',
  styleUrl: './myservices.scss'
})
export class Myservices implements OnInit{
  
  cards!: CardModel[];

  constructor(private cardService: Myservice) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

  
}
