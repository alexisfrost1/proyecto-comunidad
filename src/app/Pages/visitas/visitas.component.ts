import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Visitas } from './visitas.model'
import { VisitasService } from './visitas.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css'],
  providers: [
    VisitasService,
    RolesService,
    
]
})

export class VisitasComponent implements OnInit {
  unidad: number;
  minDate: Date; 
  maxDate: Date; 
  bBitacora: boolean = false;
  constructor(private visitasService: VisitasService,private roles: RolesService) {
    const currentDate = new Date(); 
      this.minDate = new Date(); 
      this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30)); 
      this.bBitacora = this.roles.bitacoraState();
      this.unidad = 101;
      this.Visitas = visitasService.getVisitas();
      this.VisitasConserje = visitasService.getVisitasConserje();
   }
   Visitas: Visitas[] =[];
   VisitasConserje: Visitas[] =[];
   displayedColumns: string[] = ['n_unidad', 'Nombre', 'fecha', 'cantidad'];
   displayedColumnsConserje: string[] = ['n_unidad', 'Nombre', 'fecha', 'cantidad'];
  ngOnInit(): void {
    
  }
}
