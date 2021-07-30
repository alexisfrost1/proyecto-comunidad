import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { encomienda, departamento, tipoEncomienda  } from './encomiendas-conserje.model'
import { EncomiendasConserjeService } from './encomiendas-conserje.service';

@Component({
  selector: 'app-encomiendas-conserje',
  templateUrl: './encomiendas-conserje.component.html',
  styleUrls: ['./encomiendas-conserje.component.css'],
  providers: [
    EncomiendasConserjeService
  ]
})
export class EncomiendasConserjeComponent implements OnInit {

  minDate: Date; 
  maxDate: Date; 
  
  Departamentos: departamento[] = [];
  tipoEncomiendas: tipoEncomienda[] =[]
  Encomiendas: encomienda[] = []
  Historial_Encomiendas: encomienda[] = []

  displayedColumns: string[] = ['Depto', 'Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario', 'opciones'];
  displayedColumns2: string[] = ['Depto', 'Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];

  constructor(private encomiendasConserjeService: EncomiendasConserjeService) { 
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
      this.Departamentos = encomiendasConserjeService.getDepartamentos();
      this.tipoEncomiendas = encomiendasConserjeService.getTipoEncomiendas();
      this.Encomiendas = encomiendasConserjeService.getEncomiendas();
      this.Historial_Encomiendas = encomiendasConserjeService.getHistorialEncomiendas();
  }

  ngOnInit(): void {
  }

}
