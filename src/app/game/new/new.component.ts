import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { CardService, Response } from '../../services/cards.service';

import { SetGameName } from '../../shared/app.actions';

type CardModel = [];

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [CardService]
})
export class NewComponent implements OnInit {
  public name = '';
  public image = '';
  public data = {
     cards: [],
  };
  constructor(private store: Store, private cardService: CardService) { }

  setGameName(name) {
    this.store.dispatch(new SetGameName(this.name));
  }

  changeNameHandler(event) {
    this.setGameName(event);
  }

  fetchCards(): void {
    this.cardService.fetchCards(this.name).subscribe({
      next: (data) => {
        console.log(data);
        this.data.cards = data.cards;
      }
    });
  }

  ngOnInit() {
  }

}
