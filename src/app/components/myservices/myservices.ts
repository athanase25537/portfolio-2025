import { Component } from '@angular/core';
import { Card } from "../card/card";
import { CardModel } from '../../models/cardModel';

@Component({
  selector: 'app-myservices',
  standalone: true,
  imports: [Card],
  templateUrl: './myservices.html',
  styleUrl: './myservices.scss'
})
export class Myservices {
  card1 = new CardModel(
        'fa-brands fa-angular',
      'Website test',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam!'
  )

  card2 = new CardModel(
    'fa-brands fa-angular',
  'Website angular',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam!'
  )

  card3 = new CardModel(
    'fa-brands fa-angular',
  'Website django',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam!'
  )
}
