import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTabGroup } from '@angular/material/tabs';

interface area {
    n_area: number;
    nombre_area: string;
}

interface reserva {
    nombre: string;
    fecha: string;
    n_area: number;
    nombre_area: string;
}

interface reserva_comunidad {
    n_area: number;
    fecha: Date;
}

@Component({
    selector: 'app-reservas',
    templateUrl: './reservas.component.html',
    styleUrls: ['./reservas.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ReservasComponent implements OnInit {

    minDate: Date;
    maxDate: Date;
    fechaReserva: Date | any;
    nombre: string | any;
    rut: string | any;

    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
    @ViewChild("reservas", { static: false }) reservas!: MatTabGroup;

    areaComun: area[] = [{ n_area: 1, nombre_area: 'Piscina Block n°3' },
    { n_area: 2, nombre_area: 'Quincho Terraza Block n°2' },
    { n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' }];
    nReserva: number | undefined;

    reservasUnidad: reserva[] =
        [{ nombre: 'Alexis Canessa', fecha: ((new Date())).toLocaleDateString(), n_area: 1, nombre_area: 'Piscina Block n°3' },
            { nombre: 'Alexis Canessa', fecha: (new Date((new Date()).setDate((new Date()).getDate() + 2))).toLocaleDateString(), n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' },
            { nombre: 'Fabian Contreras', fecha: (new Date((new Date()).setDate((new Date()).getDate() + 20))).toLocaleDateString(), n_area: 2, nombre_area: 'Quincho Terraza Block n°2' }];
    displayedColumns: string[] = ['nombre', 'fecha', 'n_area', 'nombre_area'];

    reservasComunidad: reserva_comunidad[] =
        [{ n_area: 1, fecha: new Date() },
        { n_area: 1, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2) },
        { n_area: 1, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5) },
        { n_area: 1, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7) },
        { n_area: 2, fecha: new Date() },
        { n_area: 2, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4) },
        { n_area: 2, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6) },
        { n_area: 2, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10) },
        { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6) },
        { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 8) },
        { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 12) },
        { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 17) }];

    fechas_nodisponibles: Date[] = [];

    fechasReserva() {

        this.fechas_nodisponibles = [];

        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (this.nReserva == this.reservasComunidad[i].n_area) {
                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
            }

        }
        this.fechaReserva = undefined;
        this.calendar.updateTodaysDate();
    }

    //* Marca las fechas reservadas anteriormente en el calendario*//
    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
        // Only highligh dates inside the month view.
        if (view === 'month') {
            /* const date = cellDate.getDate();*/
            // Highlight the 1st and 20th day of each month.
            return this.fechas_nodisponibles.some(
                (d: Date) =>
                    d.getDate() === cellDate.getDate() &&
                    d.getMonth() === cellDate.getMonth() &&
                    d.getFullYear() === cellDate.getFullYear()
            ) ? 'fecha-reservada' : '';
        }

        return '';
    }

    constructor() {

        this.nReserva = 0;

        //* Rango de fechas en las que es posible reservar*//

        this.minDate = new Date();
        this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

    }

    ngOnInit(): void {
    }

    Submit() {

        this.nReserva = 0;
        this.fechaReserva = undefined;
        this.nombre = '';
        this.rut = '';
        this.reservas.selectedIndex = 2;

    }
}