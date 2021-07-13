import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 101, name: 'Alexis Canessa, Fabian Contreras', weight: '02/07/2021', symbol: 2},
  {position: 101, name: 'Alexis Canessa', weight: '02/07/2021', symbol: 1},
  {position: 101, name: 'Alexis Canessa', weight: '02/07/2021', symbol: 1},
  {position: 101, name: 'Alexis Canessa, Fabian Contreras, Francisco', weight: '02/07/2021', symbol: 3},
  
];
@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})

export class VisitasComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    
  }
}