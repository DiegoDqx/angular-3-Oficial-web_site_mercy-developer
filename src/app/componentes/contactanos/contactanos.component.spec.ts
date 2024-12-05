import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactanosComponent } from './contactanos.component';
import { TecnicosService } from '../../servicios/tecnicos.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactanosComponent', () => {
  let component: ContactanosComponent;
  let fixture: ComponentFixture<ContactanosComponent>;
  let tecnicosService: TecnicosService;

  // Mock del servicio TecnicosService
  const mockTecnicosService = {
    obtenerTecnicos: jasmine.createSpy('obtenerTecnicos').and.returnValue(of([
      { id: 1, nombre: 'Juan Pérez', especialidad: 'Electricista' },
      { id: 2, nombre: 'María Gómez', especialidad: 'Plomero' },
      { id: 3, nombre: 'Carlos Martínez', especialidad: 'Carpintero' }
    ]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: TecnicosService,
          useValue: mockTecnicosService // Usamos el mock del servicio
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanosComponent);
    component = fixture.componentInstance;
    tecnicosService = TestBed.inject(TecnicosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tecnicos from the service', () => {
    // Llamamos al método ngOnInit que obtiene los técnicos
    component.ngOnInit();

    // Verificamos que se haya llamado al servicio
    expect(tecnicosService.obtenerTecnicos).toHaveBeenCalled();

    // Verificamos que los técnicos fueron cargados correctamente
    expect(component.tecnicos.length).toBe(3);
    expect(component.tecnicos[0].nombre).toBe('Juan Pérez');
    expect(component.tecnicos[1].especialidad).toBe('Plomero');
  });

});
