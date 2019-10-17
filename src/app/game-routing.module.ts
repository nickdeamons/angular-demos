import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './game/new/new.component';
import { OverComponent } from './game/over/over.component';
import { PlayComponent } from './game/play/play.component';
import { StartComponent } from './game/start/start.component';


const routes: Routes = [
  { path: 'game', component: StartComponent},
  { path: 'game/new', component: NewComponent},
  { path: 'game/over', component: OverComponent},
  { path: 'game/play', redirectTo: 'play'},
  { path: 'play', component: PlayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
