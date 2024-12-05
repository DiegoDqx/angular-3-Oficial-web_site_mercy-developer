import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  obtenerServicios() {
    return [
      { nombre: 'Servicio 1', descripcion: 'Descripción del servicio 1' },
      { nombre: 'Servicio 2', descripcion: 'Descripción del servicio 2' },
      { nombre: 'Servicio 3', descripcion: 'Descripción del servicio 3' },
      { nombre: 'Servicio 4', descripcion: 'Descripción del servicio 4' },
      { nombre: 'Servicio 5', descripcion: 'Descripción del servicio 5' },
      { nombre: 'Servicio 6', descripcion: 'Descripción del servicio 6' }
    ];
  }
}

