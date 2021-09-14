import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { RolesService } from 'src/app/services/roles.service';
import { Insumos } from './insumos.model';
import { InsumosService } from './insumos.service';


@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css'],
  providers: [
    InsumosService
  ]
})
export class InsumosComponent implements OnInit {
  
 // Insumos: insumos[] = []

    bBitacora: boolean;
    bBitacora$!: Observable<boolean>;

  constructor(private insumosService: InsumosService,
    private rolesService: RolesService) {
    this.bBitacora = this.rolesService.bitacoraState();
    this.HistorialInsumos = this.insumosService.getHistorialInsumos();
   }
   HistorialInsumos: Insumos[] = []
   Insumos: Insumos[] = []
   displayedColumnsHistorial: string[] = ['n_unidad', 'insumo', 'opciones'];

  ngOnInit(): void {
    this.bBitacora$ = this.rolesService.getBitacora$();
    this.bBitacora$.subscribe( bBitacora => this.bBitacora = bBitacora);
  }

}
