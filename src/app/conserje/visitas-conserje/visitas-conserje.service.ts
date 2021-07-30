import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitas } from './visitas-conserje.modal';

@Injectable({
  providedIn: 'root'
})
export class VisitasConserjeService {

  private Visitas: Visitas[]

  constructor(private http: HttpClient) { 
    this.Visitas =  [{n_unidad: 10, Nombre: 'Alexis Canessa, Fabian Contreras', fecha: '02/07/2021', cantidad: 2},
    {n_unidad: 10, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1},
    {n_unidad: 10, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1},
    {n_unidad: 7, Nombre: 'Francisco Toro', fecha: '02/07/2021', cantidad: 3},
    ];

  }
  getVisitas(){
    return this.Visitas
  }
}
