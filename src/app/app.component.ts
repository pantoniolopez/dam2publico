import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private defaultContador: number = 10;
  public title: string = 'Malagueña y exquisita';
  public contador: number = this.defaultContador;
  public factor: number = 5;

  incrementarPor(valor: number): void {
    this.contador += valor;
  }
  decrementarPor(valor: number): void {
    this.contador -= valor;
  }
  resetContador(): void {
    this.contador = this.defaultContador;
  }


}
