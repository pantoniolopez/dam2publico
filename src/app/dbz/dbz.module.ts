import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.components';
import { ListaComponent } from './components/lista/lista.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPage,
    ListaComponent,
    AddPersonajeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPage
  ]
})
export class DbzModule { }
