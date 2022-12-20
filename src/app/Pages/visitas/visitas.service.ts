import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitas } from './visitas.model'
import { RolesService } from 'src/app/Services/roles.service';
import { Roles } from 'src/app/Services/roles.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private bitacoraAccess: boolean;
    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;
  private Visitas: Visitas[]
  private Visitas_Conserje: Visitas[]

  constructor(
      private http: HttpClient,
      private rolesService: RolesService
    ) {
    this.bitacoraAccess = this.rolesService.bitacoraState();
      this.roles$ = this.rolesService.getRoles$();
      this.roles$.subscribe(roles => this.roles = roles);

    this.Visitas =
      [{ n_unidad: 101, Nombre: 'Alexis Canessa, Fabian Contreras', fecha: '02/07/2021', cantidad: 2 },
      { n_unidad: 101, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1 },
      { n_unidad: 101, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1 },
      { n_unidad: 101, Nombre: 'Alexis Canessa, Fabian Contreras, Francisco', fecha: '02/07/2021', cantidad: 3 },
      ];

      this.Visitas_Conserje =  [{n_unidad: 10, Nombre: 'Alexis Canessa, Fabian Contreras', fecha: '02/07/2021', cantidad: 2},
      {n_unidad: 10, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1},
      {n_unidad: 10, Nombre: 'Alexis Canessa', fecha: '02/07/2021', cantidad: 1},
      {n_unidad: 7, Nombre: 'Francisco Toro', fecha: '02/07/2021', cantidad: 3},
      ];
  }

  getVisitas() {
    return this.Visitas
  }
  getVisitasConserje(){
    return this.Visitas_Conserje
  }
}
