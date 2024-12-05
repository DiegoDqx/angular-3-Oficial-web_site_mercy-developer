import { Component, OnInit } from '@angular/core';
import { SolicitudFormularioService } from '../../../servicios/solicitud-formulario/solicitud-formulario.service';

@Component({
  selector: 'app-solicitudes-contactos',
  templateUrl: './solicitudes-contactos.component.html',
  styleUrls: ['./solicitudes-contactos.component.css']
})
export class SolicitudesContactosComponent implements OnInit {

  solicitudes_formulario: any[] = [];
  datosModal = {
    nombre: '',
    mensaje: ''
  };

  constructor(private solicitudFormularioSrv: SolicitudFormularioService) { }

  ngOnInit() {
    // Cargar las solicitudes al iniciar el componente
    this.obtenerSolicitudesFormulario();
  }

  // Función que obtiene las solicitudes desde el servicio
  obtenerSolicitudesFormulario() {
    this.solicitudFormularioSrv.obtenerSolicitudesFormulario().subscribe(
      (response: any) => {
        this.solicitudes_formulario = response.solicitud_formulario;  // Asigna las solicitudes a la propiedad
        console.log('Solicitudes cargadas:', this.solicitudes_formulario);
      },
      error => {
        console.log('Error al obtener solicitudes:', error);
      }
    );
  }

  // Función para mostrar el mensaje en el modal
  verMensajeEnModal(solicitudContacto: any) {
    this.datosModal.nombre = solicitudContacto.nombre;
    this.datosModal.mensaje = solicitudContacto.mensaje;
  }

  // Función para eliminar una solicitud
  eliminarSolicitudFormulario(_id: string) {
    this.solicitudFormularioSrv.eliminarSolicitudesFormulario(_id).subscribe(
      (response: any) => {
        // Verifica si la solicitud fue eliminada exitosamente
        if (response.profesional.deletedCount === 1) {
          console.log('Solicitud eliminada:', response);
          alert('Solicitud eliminada correctamente');
          this.obtenerSolicitudesFormulario();  // Actualiza la lista después de la eliminación
        } else {
          alert('No se pudo eliminar, algo pasó');
        }
      },
      error => {
        console.log('Error al eliminar solicitud:', error);
      }
    );
  }

}
