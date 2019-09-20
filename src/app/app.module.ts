import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListaBirrasComponent } from './lista-birras/lista-birras.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListaBirrasComponent,
    ListaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
