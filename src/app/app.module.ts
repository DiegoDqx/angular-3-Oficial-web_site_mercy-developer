import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos/solicitudes-contactos.component';
import { ServiciosService } from './service/servicios.service';
import { ServiciosComponent } from './servicios/servicios.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent,
    FooterComponent,
    SolicitudesContactosComponent,
    ServiciosComponent // Correcto, con la ruta correcta
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiciosService, // Correcto, con la ruta del servicio
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
