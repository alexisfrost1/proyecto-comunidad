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

    @ViewChild(MatCalendar)
    calendar!: MatCalendar<Date>;

    areaComun: area[] = [{ n_area: 1, nombre_area: 'Piscina Block n°3' },
                         { n_area: 2, nombre_area: 'Quincho Terraza Block n°2' },
                         { n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' }];
    nReserva: number | undefined; 

    reservasUnidad: reserva[] =
        [{ nombre: 'Alexis Canessa', fecha: (this.currentDate).toLocaleDateString(), n_area: 1, nombre_area: 'Piscina Block n°3' },
         { nombre: 'Alexis Canessa', fecha: (new Date(this.currentDate.setDate(this.currentDate.getDate() + 2))).toLocaleDateString(), n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' },
         { nombre: 'Fabian Contreras', fecha: (new Date(this.currentDate.setDate(this.currentDate.getDate() + 20))).toLocaleDateString(), n_area: 2, nombre_area: 'Quincho Terraza Block n°2' }];
    displayedColumns: string[] = ['nombre', 'fecha', 'n_area', 'nombre_area'];

    reservasComunidad: reserva_comunidad[] =
        [{ n_area: 1, fecha: new Date() },
         { n_area: 1, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+2) },
         { n_area: 1, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+5)  },
         { n_area: 1, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7) },
         { n_area: 2, fecha: new Date() },                                           
         { n_area: 2, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+4) },
         { n_area: 2, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+6) },
         { n_area: 2, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+10) },
         { n_area: 3, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+6) },
         { n_area: 3, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+8) },
         { n_area: 3, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+12) },
         { n_area: 3, fecha: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+17) }];

    fechas_nodisponibles: Date[] = [];

    fechasReserva() {

        this.fechas_nodisponibles = [];

            for (var i = 0; i < this.reservasComunidad.length; i++) {

                if ( this.nReserva == this.reservasComunidad[i].n_area ) {
                    this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
                }

            }
        this.calendar.updateTodaysDate();
    }

    //* Marca las fechas reservadas anteriormente en el calendario*//
    dateClass() {

            if (this.fechas_nodisponibles) {
                return (date: Date): MatCalendarCellCssClasses => {
                    const highlightDate = this.fechas_nodisponibles
                        .map((strDate) => new Date(strDate))
                        .some(
                            (d: Date) =>
                                d.getDate() === date.getDate() &&
                                d.getMonth() === date.getMonth() &&
                                d.getFullYear() === date.getFullYear()
                        );
                    return highlightDate ? 'fecha-reservada' : '';
                };
            }

        return '';
    }

    constructor() {

        this.nReserva = 0;

        //* Rango de fechas en las que es posible reservar*//

        this.minDate = new Date();
        this.maxDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 90));


    } 

  ngOnInit(): void {
  }

}
