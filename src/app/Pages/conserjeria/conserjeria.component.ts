import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Conserjeria, Lugar, Unidad } from './conserjeria.model';
import { ConserjeriaService } from './conserjeria.service';
import { Observable } from 'rxjs';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-conserjeria',
  templateUrl: './conserjeria.component.html',
    styleUrls: ['./conserjeria.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ConserjeriaService
    ]
})
export class ConserjeriaComponent implements OnInit {

    /*o_conserjeria$: Observable<Conserjeria[]>;*/

    conserjeria: Conserjeria[];
    displayedColumns: string[] = ['id', 'rut', 'nombre', 'motivo', 'lugar', 'unidad', 'rut responsable','nombre responsable','descripcion','fecha','hora'];

    constructor(
        private conserjeriaService: ConserjeriaService,
        private rolesService: RolesService
    ) {
        this.conserjeria = this.conserjeriaService.getConserjeria();

        const date = new Date();
        date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    }

  ngOnInit(): void {
  }

}

// Formulario Registrar en Bitácora
@Component({
    selector: 'new-conserjeria',
    templateUrl: './new-conserjeria.html',
    styleUrls: ['./conserjeria.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ConserjeriaService
    ]
})

export class newConserjeria implements OnInit{

    nombre: string | any;
    rut: string | any;
    descripcion: string | any;
    nMotivo: number | any;
    nLugar: number | any;
    nUnidad: number | any;
    
    show: boolean = false;


    motivo: string[];
    lugar: Lugar[];
    unidad: Unidad[][];

    constructor(
        private conserjeriaService: ConserjeriaService,
        private rolesService: RolesService
    ) {
        this.motivo = this.conserjeriaService.getMotivo();
        this.lugar = this.conserjeriaService.getLugar();
        this.unidad = this.conserjeriaService.getUnidad();
    }

    check() {

        if (this.nMotivo == undefined) {
            return;
        }

        if (this.nMotivo < 2) {

            if (this.rut !== undefined || this.rut !== '') {

                if (this.nombre !== undefined || this.nombre !== '') {

                }
            }
        }

    }

    Motivo() {

    }

    Rut() {

    }

    Nombre() {

    }

    Lugar() {
        this.nUnidad = undefined;
        this.check();
    }

    Submit() {
    }

    ngOnInit(): void {
    }
}