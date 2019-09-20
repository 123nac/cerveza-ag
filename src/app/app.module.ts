import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListaBirrasComponent } from './lista-birras/lista-birras.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { GridComponent } from './grid/grid.component';
import { MainComponent } from './main/main.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListaBirrasComponent,
    ListaCarritoComponent,
    GridComponent,
    MainComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
