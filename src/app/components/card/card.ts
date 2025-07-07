import { Component, input } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  card = input<CardModel>(
    new CardModel(
      'fa-brands fa-angular',
      'Website Creator',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam!'
    )
  );
}
