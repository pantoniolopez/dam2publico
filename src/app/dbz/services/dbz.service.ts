import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuidv4 } from 'uuid';



@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes: Personaje[] = [{
    id: uuidv4(),
    nombre: 'Goku',
    fuerza: 10000
  },
  {
    id: uuidv4(),
    nombre: 'Vegeta',
    fuerza: 8000
  },
  {
    id: uuidv4(),
    nombre: 'Trunks',
    fuerza: 6000
  },
  {
    id: uuidv4(),
    nombre: 'Bulmaa',
    fuerza: 4
  }]

  public addPersonaje(personaje: Personaje): void {
    debugger;
    const newPersonaje: Personaje = {
      ...personaje,
      id: uuidv4(),
    }

    this.personajes.push(newPersonaje);
  }

  // public onDeletePersonaje(indice: number): void {
  //   this.personajes.splice(indice, 1);
  // }

  public deletePersonaje(id : string): void {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id)
  }
}
