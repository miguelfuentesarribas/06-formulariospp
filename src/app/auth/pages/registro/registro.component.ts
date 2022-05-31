import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
 
  

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.evs]],
    username: ['', [Validators.required, this.vs.noPuedeSerMigu]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [ this.vs.camposIguales('password', 'password2')]
  })

  constructor(private fb:FormBuilder,
              private vs: ValidatorService,
              private evs: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Miguel Fuentes',
      email: 'test1@test.com',
      username: 'miguel_fuentes',
      password: '1234567',
      password2: '1234567',
    })
  }

  isFieldValid( campo: string) {
    return this.miFormulario.get(campo)?.invalid 
          && this.miFormulario.get(campo)?.touched;
  }

  emailRequired () {
    return this.miFormulario.get(`email`)?.errors?.['required']
          && this.miFormulario.get(`email`)?.touched;
  }

  emailFormato () {
    return this.miFormulario.get(`email`)?.errors?.['pattern']
          && this.miFormulario.get(`email`)?.touched;
  }

  emailTomado () {
    return this.miFormulario.get(`email`)?.errors?.['emailTomado']
          && this.miFormulario.get(`email`)?.touched;
  }

  submitForm() {
    console.log(this.miFormulario);

    this.miFormulario.markAllAsTouched();
    
  }

}


