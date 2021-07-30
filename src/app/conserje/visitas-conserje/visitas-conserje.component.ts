import { Component, OnInit } from '@angular/core';
import { Visitas } from './visitas-conserje.modal';
import { VisitasConserjeService } from './visitas-conserje.service';

@Component({
  selector: 'app-visitas-conserje',
  templateUrl: './visitas-conserje.component.html',
  styleUrls: ['./visitas-conserje.component.css'],
  providers:[
    VisitasConserjeService
  ]
})
export class VisitasConserjeComponent implements OnInit {
  
  minDate: Date; 
  maxDate: Date; 
  
  Visitas: Visitas[] = []
  
  constructor(private visitasConserjeService: VisitasConserjeService) {
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
      this.Visitas = visitasConserjeService.getVisitas();
      
   }
   
displayedColumns: string[] = ['n_unidad', 'Nombre', 'fecha', 'cantidad'];

  ngOnInit(): void {
  }

}
