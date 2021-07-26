import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTabGroup } from '@angular/material/tabs';

interface mantencion{
	nombre: string;
	rut: string;
	cargo: string;
	motivo: string;
	fecha: Date;
	hora: string;
	estacionamiento: number;
	unidad: string;
	n_unidad: number;
	elemento: string;
}

@Component({
  selector: 'app-mantenciones',
  templateUrl: './mantenciones.component.html',
  styleUrls: ['./mantenciones.component.css']
})
export class MantencionesComponent implements OnInit {

	minDate: Date;
	maxDate: Date;
	minHour: Date;
	maxHour: Date;

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

	timeChangeHandler(data: Date) {

		this.hora = new Date(data);
		console.log('Hora: ', data);
	}

	constructor() {

		//* Rango de fechas en las que es posible agendar*//
		this.minDate = new Date();
		this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

		//* Rango horario en el que es posible agendar*//
		const minHour = new Date();
		minHour.setHours(7);
		minHour.setMinutes(0);
		this.minHour = minHour;

		const maxHour = new Date();
		maxHour.setHours(24);
		maxHour.setMinutes(0);
		this.maxHour = maxHour;
	}


  ngOnInit(): void {
  }

	Submit() {
		console.log(this.hora);
	}
}
