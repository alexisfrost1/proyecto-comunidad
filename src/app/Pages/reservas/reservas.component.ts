import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Area, Reserva, Reserva_comunidad } from './reservas.model';
import { ReservasService } from './reservas.service';
import { Observable } from 'rxjs';
import { MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
    selector: 'app-reservas',
    templateUrl: './reservas.component.html',
    styleUrls: ['./reservas.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ReservasService
    ]
})

export class ReservasComponent implements OnInit {

    //o_areaComun: Observable<Area[]>;
    //o_reservasUnidad: Observable<Reserva_comunidad[]>;
    //o_reservasComunidad: Observable<Reserva[]>;

    minDate: Date;
    maxDate: Date;
    fechaReserva: Date | any;
    nombre: string | any;
    rut: string | any;
    nReserva: number | undefined;

    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
    @ViewChild("reservas", { static: false }) reservas!: MatTabGroup;

    areaComun: Area[] = [];
    reservasUnidad: Reserva[] = [];
    reservasComunidad: Reserva_comunidad[] = [];
    fechas_nodisponibles: Date[] = [];
    displayedColumns: string[] = ['nombre', 'fecha', 'n_area', 'nombre_area'];

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

    constructor(private reservasService: ReservasService) {

        this.nReserva = 0;

        //* Rango de fechas en las que es posible reservar*//
        this.minDate = new Date();
        this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

        //this.o_areaComun =         reservasService.getAreas();
        //this.o_reservasUnidad =    reservasService.getReservas();
        //this.o_reservasComunidad = reservasService.getReservasComunidad();

        this.areaComun = reservasService.getAreas();
        this.reservasUnidad = reservasService.getReservas();
        this.reservasComunidad = reservasService.getReservasComunidad(); 
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