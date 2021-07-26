import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

interface encomienda {
  Destinatario: string;
  tipo: string;
  entregada_por: string;
  recibe: string;
  fecha: string;
  comentario: string;
}
@Component({
  selector: 'app-encomiendas',
  templateUrl: './encomiendas.component.html',
  styleUrls: ['./encomiendas.component.css']
})
export class EncomiendasComponent implements OnInit {

  Encomiendas: encomienda[] =
        [{Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada'},
         {Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:''}];
    displayedColumns: string[] = ['Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];

    Historial_Encomiendas: encomienda[] =
        [{Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'16/05/2021 09:20', comentario:''},
         {Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'20/06/2021 17:30', comentario:'Caja pequeña'},
         {Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada'},
         {Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:''}];
    displayedColumns2: string[] = ['Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];
    
  constructor() { }

  ngOnInit(): void {
  }

}
