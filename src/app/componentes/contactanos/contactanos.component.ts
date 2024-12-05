import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicosService } from '../../servicios/tecnicos.service';  // Importa el servicio de técnicos

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']  // Asegúrate de que el nombre del archivo de estilos esté correcto
})
export class ContactanosComponent implements OnInit {
  formularioForm;
  datos_formulario: any;
  tecnicos: any[] = [];  // Declaramos una variable para almacenar los técnicos

  constructor(
    private formBuild: FormBuilder,
    private solicitudFormularioSrv: SolicitudFormularioService,
    private tecnicosService: TecnicosService  // Inyectamos el servicio de técnicos
  ) {
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit(): void {
    this.tecnicos = this.tecnicosService.obtenerTecnicos();  // Obtenemos la lista de técnicos al cargar el componente
  }

  enviarDatos() {
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
}
