import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';
import { AutorComponent } from './autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarLivrosComponent,
    MenuComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
