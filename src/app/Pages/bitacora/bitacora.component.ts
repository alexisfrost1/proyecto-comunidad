import { Component, OnInit, ViewChild, ViewEncapsulation,OnDestroy } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { RolesService } from 'src/app/Services/roles.service';
import { bitacora, departamento, registro } from './bitacora.model'
import { BitacoraService } from './bitacora.service';
import {VisitasComponent} from '../visitas/visitas.component'


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [
    BitacoraService
  ]
})
export class BitacoraComponent implements OnInit, OnDestroy {
  minDate: Date;
  maxDate: Date;

  bBitacora: boolean = true;
  Departamentos: departamento[] = [];
  Registros: registro[] = [];
  Bitacora: bitacora[] = [];

  displayedColumns: string[] = ['Registro', 'Tipo', 'ingresado_por', 'fecha', 'departamento', 'comentario', 'opciones'];


  constructor(
    private bitacoraService: BitacoraService,
    private rolesService: RolesService,
    
  ) {
    const currentDate = new Date();
    this.minDate = new Date();
    this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
    this.Departamentos = bitacoraService.getDepartamentos();
    this.Registros = bitacoraService.getRegistros();
    this.Bitacora = bitacoraService.getBitacora();
    this.rolesService.bitacoraAccess();
    this.bBitacora = this.rolesService.bitacoraState();
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.rolesService.bitacoraNgDestroy();
  }
}
