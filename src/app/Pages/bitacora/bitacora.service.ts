import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from '../../services/roles.model';
import { RolesService } from 'src/app/services/roles.service';
import { bitacora, departamento, registro } from './bitacora.model'
@Injectable({
  providedIn: 'root'
})
export class BitacoraService {
  private bitacoraAccess: boolean;
    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;
  private Departamentos: departamento[];
  private Registros: registro[];
  private Bitacora: bitacora[]

  constructor(
    private http: HttpClient,
    private rolesService: RolesService
  ) {
    this.bitacoraAccess = this.rolesService.bitacoraState();
      this.roles$ = this.rolesService.getRoles$();
      this.roles$.subscribe(roles => this.roles = roles);

    this.Departamentos = [{ n_departamento: 1, departamento: 'Departamento_1' },
    { n_departamento: 2, departamento: 'Departamento_2' },
    { n_departamento: 3, departamento: 'Departamento_3' }];

    this.Registros = [{ n_novedad: 1, novedad: 'Cambio de turno' },
    { n_novedad: 2, novedad: 'Colación' },
    { n_novedad: 3, novedad: 'Encomienda' },
    { n_novedad: 4, novedad: 'Entrega de llave' },
    { n_novedad: 5, novedad: 'Recaudación' },
    { n_novedad: 6, novedad: 'Inventario' },
    { n_novedad: 7, novedad: 'Otro' }];

    this.Bitacora = [{ Registro: 45, Tipo: 'Otro', ingresado_por: 'Conserje_1', fecha: '02/07/2021', departamento: 2, comentario: '', opciones: '1' },
    { Registro: 44, Tipo: 'Recaudacion', ingresado_por: 'Conserje_2', fecha: '02/07/2021', departamento: 1, comentario: 'Se informa al departamento 1 por cobro de multa por ruidos molestos el 29/06/2021', opciones: '1' },
    { Registro: 43, Tipo: 'Cambio de turno', ingresado_por: 'Administrador', fecha: '02/07/2021', departamento: 1, comentario: 'Se realiza ronda para verificar ruidos molestos', opciones: '1' },
    { Registro: 42, Tipo: 'Cambio de turno', ingresado_por: 'Administrador', fecha: '02/07/2021', departamento: 3, comentario: '', opciones: '1' },
    ];
  }


  
  getDepartamentos() {
    return this.Departamentos
  }
  getRegistros() {
    return this.Registros
  }
  getBitacora() {
    return this.Bitacora
  }
}
