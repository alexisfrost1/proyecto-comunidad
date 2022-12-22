import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Mantencion } from './mantenciones.model';
import { MantencionesService } from './mantenciones.service';
import { Observable } from 'rxjs';
import { MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTabGroup } from '@angular/material/tabs';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-mantenciones',
  templateUrl: './mantenciones.component.html',
  styleUrls: ['./mantenciones.component.css']
})
export class MantencionesComponent implements OnInit {

	/*mantenciones$: Observable<Mantencion[]>;*/

	minDate: Date;
	maxDate: Date;
	minHour: string;
	maxHour: string;

	bBitacora: boolean;
	bBitacora$!: Observable<boolean>;

	mantencion: Mantencion;

	hora: string | any;

	tabMantenciones: number = 0;

	mantenciones: Mantencion[];
	displayedColumns: string[] = [
		'rut', 
		'nombre', 
		'cargo', 
		'motivo', 
		'fecha', 
		'hora', 
		'estacionamiento', 
		'unidad', 
		'n_unidad', 
		'elemento'
	];

	constructor(
		private mantencionesService: MantencionesService,
		private rolesService: RolesService
		) {

			this.mantencion = this.defaultMantencion();

			//* Rango de fechas en las que es posible agendar*//
			this.minDate = new Date();
			this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

			//* Rango horario en el que es posible agendar*//
			this.minHour = '07:00';
			this.maxHour = '23:00';

			/*this.o_mantenciones$ = this.mantencionesService.getMantenciones();*/
			this.bBitacora = this.rolesService.bitacoraState();
			this.mantenciones = this.mantencionesService.getMantenciones();

			if (this.bBitacora) {
				this.displayedColumns =['id', 'rut', 'nombre', 'cargo', 'motivo', 'fecha', 'hora', 'estacionamiento', 'unidad', 'n_unidad', 'elemento'];
			}
	}

	defaultMantencion(){
		return {
			id:  undefined,
			nombre:  '',
			rut:  '',
			cargo:  '',
			motivo:  '',
			fecha: undefined,
			estacionamiento:  '',
			unidad:  '',
			n_unidad:  '',
			elemento:  '',
		};
	}

  	ngOnInit(): void {
		this.bBitacora$ = this.rolesService.getBitacora$();
		this.bBitacora$.subscribe( bBitacora => this.bBitacora = bBitacora);
  	}

  	Submit() {
    /*
		this.fecha.setHours(this.hora.getHours());
		this.fecha.setMinutes(this.hora.getMinutes());
    */
		console.log(this.mantencion.fecha);
	}
}
