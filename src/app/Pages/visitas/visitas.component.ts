import { Component, OnInit } from '@angular/core';
import { Visitas } from './visitas.model'
import { VisitasService } from './visitas.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css'],
  providers: [
    VisitasService
]
})

export class VisitasComponent implements OnInit {
  unidad: number;
  minDate: Date; 
  maxDate: Date; 
  constructor(private visitasService: VisitasService) {
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 

      this.unidad = 101;
      this.Visitas = visitasService.getVisitas();
   }
   Visitas: Visitas[] =[];
   displayedColumns: string[] = ['n_unidad', 'Nombre', 'fecha', 'cantidad'];
  ngOnInit(): void {
    
  }
}
