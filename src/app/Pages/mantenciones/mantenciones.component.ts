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

	/*o_mantenciones$: Observable<Mantencion[]>;*/

	minDate: Date;
	maxDate: Date;
	minHour: Date;
	maxHour: Date;

	bBitacora: boolean;
	bBitacora$!: Observable<boolean>;

	nombre: string | any;
	rut: string | any;
	cargo: string | any;
	motivo: string | any;
	fecha: Date | any;
	hora: Date | any;
	estacionamiento: number | any;
	unidad: string | any;
	n_unidad: number | any;
	elemento: string | any;

	tabMantenciones: number = 0;

	mantenciones: Mantencion[];
	displayedColumns: string[] = ['rut', 'nombre', 'cargo', 'motivo', 'fecha', 'hora', 'estacionamiento', 'unidad', 'n_unidad', 'elemento'];

	timeChange(data: Date) {

		this.hora = new Date(data);
		console.log('Hora: ', data.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }));
	}

	constructor(
		private mantencionesService: MantencionesService,
		private rolesService: RolesService
		) {

		//* Rango de fechas en las que es posible agendar*//
		this.minDate = new Date();
		this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

		//* Rango horario en el que es posible agendar*//
		const minHour = new Date();
		minHour.setHours(7);
		minHour.setMinutes(0);
		this.minHour = minHour;

		const maxHour = new Date();
		maxHour.setHours(23);
		maxHour.setMinutes(0);
		this.maxHour = maxHour;

		/*this.o_mantenciones$ = this.mantencionesService.getMantenciones();*/
		this.bBitacora = this.rolesService.bitacoraState();
		this.mantenciones = this.mantencionesService.getMantenciones();

		if (this.bBitacora) {
			this.displayedColumns =['id', 'rut', 'nombre', 'cargo', 'motivo', 'fecha', 'hora', 'estacionamiento', 'unidad', 'n_unidad', 'elemento'];
		}
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
		console.log(this.fecha);
	}
}
