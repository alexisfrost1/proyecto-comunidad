<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';


interface area {
    value: number;
    viewvalue: string;
}

@Component({
    selector: 'app-reservas',
    templateUrl: './reservas.component.html',
    styleUrls: ['./reservas.component.css']
})

export class ReservasComponent implements OnInit {

    areaComun: area[] = [{ value: 1, viewvalue: 'Piscina Block n°3' },
                         { value: 2, viewvalue: 'Quincho Terraza Block n°2' },
                         { value: 3, viewvalue: 'Multicancha Plaza n°2' }];
    areaReserva: String = ''; 

    minDate: Date;
    maxDate: Date;
    fechaReserva: Date = new Date();

    constructor() {
        const currentDate = new Date();
        this.minDate = new Date();
        this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 90));
    } 

  ngOnInit(): void {
  }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> parent of 2201d47 (Add files via upload)
