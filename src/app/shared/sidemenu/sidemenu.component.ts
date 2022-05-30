import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  menu: MenuItem[] = [
    {
      texto: 'Template Basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Template Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Template Switches',
      ruta: './template/switches'
    },
    {
      texto: 'Reactive Basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Reactive Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Reactive Switches',
      ruta: './reactive/switches'
    },
    
  ]

}
