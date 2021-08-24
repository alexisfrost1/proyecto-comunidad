import { Component, OnInit } from '@angular/core';
import { Conserjeria } from './conserjeria.model';
import { ConserjeriaService } from './conserjeria.service';
import { Observable } from 'rxjs';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-conserjeria',
  templateUrl: './conserjeria.component.html',
  styleUrls: ['./conserjeria.component.css']
})
export class ConserjeriaComponent implements OnInit {

    /*o_conserjeria$: Observable<Conserjeria[]>;*/

    conserjeria: Conserjeria[];
    displayedColumns: string[] = ['rut','nombre','rut responsable','nombre responsable','motivo','descripcion','fecha','hora'];

    constructor(
        private conserjeriaService: ConserjeriaService,
        private rolesService: RolesService
    ) {
        this.conserjeria = this.conserjeriaService.getConserjeria();
    }

  ngOnInit(): void {
  }

}
