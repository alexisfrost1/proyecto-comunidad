import { Component, OnInit, ViewChild} from '@angular/core';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';

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
    styleUrls: ['./reservas.component.css']
})

export class ReservasComponent implements OnInit {

    minDate: Date;
    maxDate: Date;
    fechaReserva: Date | any;
    currentDate: Date = new Date();

    areaComun: area[] = [{ n_area: 1, nombre_area: 'Piscina Block n°3' },
                         { n_area: 2, nombre_area: 'Quincho Terraza Block n°2' },
                         { n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' }];
    nReserva: number = 0; 

    reservasUnidad: reserva[] =
        [{ nombre: 'Alexis Canessa', fecha: (this.currentDate).toLocaleDateString(), n_area: 1, nombre_area: 'Piscina Block n°3' },
         { nombre: 'Alexis Canessa', fecha: (new Date(this.currentDate.setDate(this.currentDate.getDate() + 2))).toLocaleDateString(), n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' },
         { nombre: 'Fabian Contreras', fecha: (new Date(this.currentDate.setDate(this.currentDate.getDate() + 20))).toLocaleDateString(), n_area: 2, nombre_area: 'Quincho Terraza Block n°2' },];
    displayedColumns: string[] = ['nombre', 'fecha', 'n_area', 'nombre_area'];

    reservasComunidad: reserva_comunidad[] =
        [{ n_area: 1, fecha: new Date(this.currentDate) },
         { n_area: 1, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 5)) },
         { n_area: 1, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 7)) },
         { n_area: 1, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 14)) },
         { n_area: 2, fecha: new Date(this.currentDate) },                          
         { n_area: 2, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 6)) },
         { n_area: 2, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 9)) },
         { n_area: 2, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 20)) },
         { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 2)) },
         { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 4)) },
         { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 10)) },
         { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 17)) }];

    fechas_nodisponibles: Array<Date> = [];

    @ViewChild('calendar')
    calendar!: MatCalendar<Date>;

    fechasReserva() {

        this.fechas_nodisponibles = new Array<Date>();
        for ( var i = 0; i <= this.reservasComunidad.length; i++) {

            if ( this.nReserva == this.reservasComunidad[i].n_area ) {
                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
            }

        }
        this.calendar.updateTodaysDate();
    }

    dateClass() {

        if ( this.fechas_nodisponibles.length != 0) {

            if (this.fechas_nodisponibles) {
                return (date: Date): MatCalendarCellCssClasses => {
                    const highlightDate = this.fechas_nodisponibles
                        .map((strDate: Date) => new Date(strDate))
                        .some(
                            (d: Date) =>
                                d.getDate() === date.getDate() &&
                                d.getMonth() === date.getMonth() &&
                                d.getFullYear() === date.getFullYear()
                        );
                    return highlightDate ? 'fecha-reservada' : '';
                };
            }

        }
        return '';
    }

    constructor() {

        //* Rango de fechas en las que es posible reservar*//

        this.minDate = new Date();
        this.maxDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 90));


    } 

  ngOnInit(): void {
  }

}
