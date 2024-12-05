// src/app/servicios/tecnicos.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TecnicosService {
  constructor() {}

  obtenerTecnicos() {
    return [
      { id: 1, nombre: 'Juan Pérez', especialidad: 'Electricista', foto: 'assets/juanperezeletricista.jfif' },
      { id: 2, nombre: 'María Gómez', especialidad: 'Plomero', foto: 'assets/mariagomez.jfif' },
      { id: 3, nombre: 'Carlos Martínez', especialidad: 'Carpintero', foto: 'assets/carlosmartinez.jpg' },
    ];
  }
}
