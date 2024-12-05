// src/app/service/solicitudes.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  // Esta función devuelve un array de solicitudes simuladas
  obtenerSolicitudes() {
    return [
      { nombre: 'Sebastian', apellido: 'Choque', correo: 'sebastian@cftmail.cl', telefono: '959139093', mensaje: 'Solicitud de información' },
      { nombre: 'Victor', apellido: 'Herrera', correo: 'victor@cftmail.cl', telefono: '12358746889', mensaje: 'Ayuda con producto' },
      // Agrega más solicitudes aquí...
    ];
  }
}
