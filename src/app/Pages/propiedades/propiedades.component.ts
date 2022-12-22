import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { Ubicacion, Unidad } from './propiedades.model';
import { PropiedadesService } from './propiedades.service';
import { RolesService } from 'src/app/services/roles.service';
import { Observable } from 'rxjs';
import { MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-propiedades',
    templateUrl: './propiedades.component.html',
    styleUrls: ['./propiedades.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        PropiedadesService
    ]
})
export class PropiedadesComponent implements OnInit, OnDestroy {

    constructor(
        private propiedadesService: PropiedadesService,
        private roles: RolesService,
        public dialog: MatDialog
    ) {

    }

  ngOnInit(): void {
  }

    ngOnDestroy() {
        //this.propiedadesService.ngOnDestroy();
    }
}
