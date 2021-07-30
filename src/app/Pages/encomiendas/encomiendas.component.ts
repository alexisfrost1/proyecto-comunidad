import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { encomienda } from './encomiendas.model'
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

  Encomiendas: encomienda[] = []
  Historial_Encomiendas: encomienda[] = []
  
  displayedColumns: string[] = ['Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];
  displayedColumns2: string[] = ['Destinatario', 'tipo', 'entregada_por', 'recibe', 'fecha', 'comentario'];
    
  constructor(private encomiendasService: EncomiendasService) { 
    this.Encomiendas = encomiendasService.getEncomiendas();
    this.Historial_Encomiendas = encomiendasService.getHistorial_Encomiendas();
  }

  ngOnInit(): void {
  }

}
