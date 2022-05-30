import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) { }
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      ['Dark Souls', Validators.required],
      ['Rocket League', Validators.required],
    ], Validators.required)
  })


  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr () {
    return this.miFormulario.get('favoritos') as FormArray 
  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarJuego() {}

  borrar( i: number ) {
    this.favoritosArr.removeAt(i)
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  guardar() {
    if (!this.miFormulario.invalid) {
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
      return;
    }
  }
}
