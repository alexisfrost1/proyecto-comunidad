import { Component, OnInit } from '@angular/core';

interface area {
    n_area: number;
    nombre_area: string;
}

interface reserva {
    nombre: string;
    rut: string;
    fecha: Date;
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
    fechaReserva: Date = new Date();
    currentDate = new Date();

    areaComun: area[] = [{ n_area: 1, nombre_area: 'Piscina Block n°3' },
                         { n_area: 2, nombre_area: 'Quincho Terraza Block n°2' },
                         { n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' }];
    nReserva: number = 0; 

    reservasUnidad: reserva[] = [{ nombre: 'Alexis Canessa', rut: '11111', fecha: this.currentDate, n_area: 1, nombre_area: 'Piscina Block n°3' }];

    reservasComunidad: reserva_comunidad[] = [{ n_area: 1, fecha: this.currentDate },
        { n_area: 1, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 5)) },
        { n_area: 1, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 7)) },
        { n_area: 1, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 14)) },
        { n_area: 2, fecha: this.currentDate },
        { n_area: 2, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 6)) },
        { n_area: 2, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 9)) },
        { n_area: 2, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 20)) },
        { n_area: 3, fecha: this.currentDate },
        { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 4)) },
        { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 10)) },
        { n_area: 3, fecha: new Date(this.currentDate.setDate(this.currentDate.getDate() + 17)) }];

    constructor() {

        //* Rango de fechas en las que es posible reservar*//

        this.minDate = new Date();
        this.maxDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 90));


    } 

  ngOnInit(): void {
  }

}
