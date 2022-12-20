import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { RolesService } from 'src/app/Services/roles.service';
import { departamento, encomienda, encomiendaConserje, tipoEncomienda } from './encomiendas.model'
import { EncomiendasService } from './encomiendas.service';

@Component({
  selector: 'app-encomiendas',
  templateUrl: './encomiendas.component.html',
  styleUrls: ['./encomiendas.component.css'],
  providers: [
    EncomiendasService
  ]
})
export class EncomiendasComponent implements OnInit {
  minDate: Date; 
  maxDate: Date; 

  Encomiendas: encomienda[] = []
  Historial_Encomiendas: encomienda[] = []
    bBitacora: boolean;
    bBitacora$!: Observable<boolean>;
  displayedColumns: string[] = ['Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];
  displayedColumns2: string[] = ['Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];
  
  Departamentos: departamento[] = [];
  tipoEncomiendas: tipoEncomienda[] =[]
  EncomiendasConserje: encomiendaConserje[] = []
  Historial_EncomiendasConserje: encomienda[] = []

  displayedColumns3: string[] = ['Depto', 'Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario', 'opciones'];
  displayedColumns4: string[] = ['Depto', 'Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];
 
  constructor(private encomiendasService: EncomiendasService,
    private rolesService: RolesService) { 
    const currentDate = new Date();
    this.Encomiendas = encomiendasService.getEncomiendas();
    this.Historial_Encomiendas = encomiendasService.getHistorial_Encomiendas();
      this.bBitacora = this.rolesService.bitacoraState();


    this.minDate = new Date(); 
    this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
    this.Departamentos = encomiendasService.getDepartamentos();
    this.tipoEncomiendas = encomiendasService.getTipoEncomiendas();
    this.EncomiendasConserje = encomiendasService.getEncomiendasConserje();
    this.Historial_EncomiendasConserje = encomiendasService.getHistorialEncomiendas();
  }

    ngOnInit(): void {
        this.bBitacora$ = this.rolesService.getBitacora$();
        this.bBitacora$.subscribe( bBitacora => this.bBitacora = bBitacora);
  }

}
