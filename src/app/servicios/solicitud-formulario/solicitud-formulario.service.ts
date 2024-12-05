import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SolicitudFormularioService {

  private backend = environment.backend + "/solicitud-formulario";  // Asegúrate de que 'backend' esté configurado correctamente en environment

  constructor(private http: HttpClient) { }

  /**
   * Registra una nueva solicitud de formulario.
   * @param solicitud_formulario Los datos del formulario de solicitud
   * @returns Observable que contiene la respuesta del backend
   */
  registrarFormulario(solicitud_formulario: any) {
    return this.http.post(`${this.backend}/crear-solicitud-formulario`, { solicitud_formulario });
  }

  /**
   * Obtiene todas las solicitudes de formulario.
   * @returns Observable que contiene las solicitudes obtenidas del backend
   */
  obtenerSolicitudesFormulario() {
    return this.http.get(`${this.backend}/obtener-solicitudes-formulario`);
  }

  /**
   * Elimina una solicitud de formulario por su ID.
   * @param id_solicitud_formulario El ID de la solicitud a eliminar
   * @returns Observable que contiene la respuesta del backend
   */
  eliminarSolicitudesFormulario(id_solicitud_formulario: string) {
    return this.http.delete(`${this.backend}/eliminar-solicitud-formulario-por-id/${id_solicitud_formulario}`);
  }
}
