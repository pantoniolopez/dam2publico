import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    id: '',
    nombre: '',
    fuerza: 0
  }

  public addPersonaje(): void {
    this.onNewPersonaje.emit(this.personaje);

    // Inicilizamos el personaje
    this.personaje = {
      id: '',
      nombre: '',
      fuerza: null};
    // this.personaje.nombre = '';
    // this.personaje.fuerza = 0;
  }
}
