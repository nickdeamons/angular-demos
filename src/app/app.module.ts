import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppState } from './shared/app.state';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

/* Game Declarations */
import { GameModule } from './game.module';


const routes: Routes = [
  {
    path: '*',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      AppState
    ]),
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule,
    RouterModule.forRoot(routes),
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
