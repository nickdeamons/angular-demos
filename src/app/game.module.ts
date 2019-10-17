import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NewComponent } from './game/new/new.component';
import { OverComponent } from './game/over/over.component';
import { PlayComponent } from './game/play/play.component';
import { StartComponent } from './game/start/start.component';

@NgModule({
  declarations: [
    NewComponent,
    OverComponent,
    PlayComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class GameModule { }
