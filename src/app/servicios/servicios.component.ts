import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../service/servicios.service';  // Ruta correcta del servicio

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    // Obtener los servicios desde el servicio de Angular
    this.servicios = this.serviciosService.obtenerServicios();
  }
}
