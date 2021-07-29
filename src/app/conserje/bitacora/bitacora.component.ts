import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
interface bitacora {
  Registro: number;
  Tipo: string;
  ingresado_por: string;
  fecha: string;
  departamento: number;
  comentario: string;
  opciones: string;
}
interface departamento {
  n_departamento: number;
  departamento: string;
}

interface registro {
  n_novedad: number;
  novedad: string;
}


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {
  minDate: Date; 
  maxDate: Date; 
  

  Departamentos: departamento[] = [{ n_departamento: 1, departamento: 'Departamento_1' },
  { n_departamento: 2, departamento: 'Departamento_2' },
  { n_departamento: 3, departamento: 'Departamento_3' }];

  Registros: registro[] =[{ n_novedad: 1, novedad:'Cambio de turno'},
                               { n_novedad: 2, novedad:'Colación'},
                               { n_novedad: 3, novedad:'Encomienda'},
                               { n_novedad: 4, novedad:'Entrega de llave'},
                               { n_novedad: 5, novedad:'Recaudación'},
                               { n_novedad: 6, novedad:'Inventario'},
                               { n_novedad: 7, novedad:'Otro'},
]

  Bitacora: bitacora[] =
  [{Registro: 45, Tipo:'Otro', ingresado_por: 'Conserje_1', fecha: '02/07/2021', departamento: 2, comentario:'', opciones:'1'},
  {Registro: 44, Tipo:'Recaudacion', ingresado_por: 'Conserje_2', fecha: '02/07/2021', departamento: 1, comentario:'Se informa al departamento 1 por cobro de multa por ruidos molestos el 29/06/2021', opciones:'1'},
  {Registro: 43, Tipo:'Cambio de turno', ingresado_por: 'Administrador', fecha: '02/07/2021', departamento: 1,  comentario:'Se realiza ronda para verificar ruidos molestos', opciones:'1'},
  {Registro: 42, Tipo:'Cambio de turno',ingresado_por: 'Administrador', fecha: '02/07/2021', departamento: 3,  comentario:'', opciones:'1'},
  ];
displayedColumns: string[] = ['Registro', 'Tipo', 'ingresado_por', 'fecha', 'departamento', 'comentario' , 'opciones'];


  constructor() { 
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
  
  }

  ngOnInit(): void {
  }

}
