import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

interface encomienda {
  Depto: number;
  Destinatario: string;
  tipo: string;
  entregada_por: string;
  recibe: string;
  fecha: string;
  comentario: string;
  opciones: string;
}
interface departamento {
  n_departamento: number;
  departamento: string;
}
interface tipoEncomienda {
  n_encomienda: number;
  tipo: string;
}
@Component({
  selector: 'app-encomiendas-conserje',
  templateUrl: './encomiendas-conserje.component.html',
  styleUrls: ['./encomiendas-conserje.component.css']
})
export class EncomiendasConserjeComponent implements OnInit {

  minDate: Date; 
  maxDate: Date; 
  
  Departamentos: departamento[] = [{ n_departamento: 1, departamento: 'Departamento_1' },
  { n_departamento: 2, departamento: 'Departamento_2' },
  { n_departamento: 3, departamento: 'Departamento_3' }];

  tipoEncomiendas: tipoEncomienda[] =[{ n_encomienda: 1, tipo:'Diario'},
  { n_encomienda: 2, tipo:'Encomienda'},
  { n_encomienda: 3, tipo:'Sobre'},
  { n_encomienda: 4, tipo:'Carta'}
]
  Encomiendas: encomienda[] =
  [{Depto: 1 ,Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada', opciones:''},
   {Depto: 1 ,Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:'', opciones:''}];
displayedColumns: string[] = ['Depto', 'Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario', 'opciones'];

Historial_Encomiendas: encomienda[] =
  [{Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'16/05/2021 09:20', comentario:'', opciones:''},
   {Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'20/06/2021 17:30', comentario:'Caja pequeña', opciones:''},
   {Depto: 5, Destinatario: 'Alexis Canessa', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada', opciones:''},
   {Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:'', opciones:''}];
displayedColumns2: string[] = ['Depto', 'Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];

  constructor() { 
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
  }

  ngOnInit(): void {
  }

}
