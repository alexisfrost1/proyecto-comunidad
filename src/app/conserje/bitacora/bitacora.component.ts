import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { bitacora, departamento, registro} from './bitacora.model'
import { BitacoraService } from './bitacora.service';


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [
    BitacoraService
  ]
})
export class BitacoraComponent implements OnInit {
  minDate: Date; 
  maxDate: Date; 
  

  Departamentos: departamento[] = [];
  Registros: registro[] = [];
  Bitacora: bitacora[] = [];
  
displayedColumns: string[] = ['Registro', 'Tipo', 'ingresado_por', 'fecha', 'departamento', 'comentario' , 'opciones'];


  constructor(private bitacoraService: BitacoraService) { 
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
      this.Departamentos = bitacoraService.getDepartamentos();
      this.Registros = bitacoraService.getRegistros();
      this.Bitacora = bitacoraService.getBitacora();
  }

  ngOnInit(): void {
  }

}
