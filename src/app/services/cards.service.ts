import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { RequestOptions } form '@angular/common/RequestOptions'

import { Observable } from 'rxjs';

export interface Response {
  cards: any[];
}

@Injectable()
export class CardService {
  constructor(private http: HttpClient) { }

  public fetchCards(cardName): Observable<Response> {

  // let options = new RequestOptions({ headers: headers });
    return this.http.get<Response>('https://api.magicthegathering.io/v1/cards?name=' + cardName);
  }

}
