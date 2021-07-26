import { Component, OnInit } from '@angular/core';

interface Visitas {
  n_unidad: number;
  Nombre: string;
  fecha: string;
  cantidad: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})

export class VisitasComponent implements OnInit {
  unidad: number;
  minDate: Date; 
  maxDate: Date; 
  constructor() {
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 

      this.unidad = 101;
   }
   Visitas: Visitas[] =
   [{n_unidad: 101, Nombre: 'Alexis Canessa, Fabian Contreras', fecha: '02/07/2021', cantidad: 2},
   {n_unidad: 101, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1},
   {n_unidad: 101, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1},
   {n_unidad: 101, Nombre: 'Alexis Canessa, Fabian Contreras, Francisco', fecha: '02/07/2021', cantidad: 3},
   ];
displayedColumns: string[] = ['n_unidad', 'Nombre', 'fecha', 'cantidad'];
  ngOnInit(): void {
    
  }
}
