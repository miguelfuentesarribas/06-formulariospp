import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Miguel',
    favoritos: [
      {id: 1, nombre: 'rocket league'},
      {id: 2, nombre: 'enter the gungeon'}
    ]
  }

  guardar() {
    console.log('formulario posteado');
  }

  eliminar( i:number ) {
    this.persona.favoritos.splice(i, 1)
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';

  }
}
