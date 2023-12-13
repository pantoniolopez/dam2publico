import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input()
  public listaPersonajes: Personaje[] = [];

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  public deletePersonaje(id: string | undefined): void {
    this.onDeletePersonaje.emit(id);
  }

}
