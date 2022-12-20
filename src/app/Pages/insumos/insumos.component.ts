import { Component, OnInit, ViewChild, ViewEncapsulation,Inject  } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { RolesService } from 'src/app/Services/roles.service';
import { Insumos } from './insumos.model';
import { InsumosService } from './insumos.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    private insumosService: InsumosService,
    private rolesService: RolesService,
    public dialog: MatDialog
    )
     {
    this.bBitacora = this.rolesService.bitacoraState();
    this.HistorialInsumos = this.insumosService.getHistorialInsumos();
   }
   HistorialInsumos: Insumos[] = []
   Insumos: Insumos[] = []
   displayedColumnsHistorial: string[] = ['n_insumo', 'insumo', 'opciones'];
   displayedColumns: string[] = ['n_insumo', 'insumo'];
  ngOnInit(): void {
    this.bBitacora$ = this.rolesService.getBitacora$();
    this.bBitacora$.subscribe( bBitacora => this.bBitacora = bBitacora);
  }

  EditarInsumo(i: number):void {

    console.log(i)
    const editModal = this.dialog.open(editInsumos, {
        width: '60%',
        data: {
          n_insumo: this.Insumos[i].n_insumo,
          insumo: this.Insumos[i].insumo,
          opciones: this.Insumos[i].opciones,
        }
    });

    editModal.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (!(result == undefined)) {
          this.Insumos[i].n_insumo = result.n_insumo;
          this.Insumos[i].insumo = result.insumo;
          this.Insumos[i].opciones = result.opciones;
            console.log('subscribed');
        }

    });


}
}
export class editInsumos {

  HistorialInsumos: Insumos[] = []
  Insumos: Insumos[] = []
  displayedColumnsHistorial: string[] = ['n_insumo', 'insumo', 'opciones'];
  displayedColumns: string[] = ['n_insumo', 'insumo'];


  constructor(
      public editModal: MatDialogRef<editInsumos>,
      @Inject(MAT_DIALOG_DATA) public data: Insumos,
      private insumosService: InsumosService,
      private rolesService: RolesService
  ) {
     this.HistorialInsumos = this.insumosService.getHistorialInsumos();

     for (var i = 0; i < this.HistorialInsumos.length; i++) {

      if (this.data.n_insumo == this.HistorialInsumos[i].n_insumo) {
          
      }

  }

  }


  onNoClick(): void {
      this.editModal.close();
  }
}