import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

    minDate: Date;
    maxDate: Date;

    constructor() {
        const currentDate = new Date();
        this.minDate = new Date();
        this.maxDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
    }

  ngOnInit(): void {
  }

}
