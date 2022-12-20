import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/Services/roles.model';
import { RolesService } from 'src/app/Services/roles.service';
import { Insumos } from './insumos.model';

@Injectable({
    providedIn: 'root'
  })

export class InsumosService{
    private bitacoraAccess: boolean;
    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;
  private Insumos: Insumos[];
  private Historial_Insumos: Insumos[]; 
  constructor(
      private http: HttpClient,
      private rolesService: RolesService
    ) { 
        this.bitacoraAccess = this.rolesService.bitacoraState();
        this.roles$ = this.rolesService.getRoles$();
        this.roles$.subscribe(roles => this.roles = roles);
        
            this.Historial_Insumos =   [{n_insumo: 3, insumo: 'Cilindro de Gas 45 Kg', opciones:''},
            {n_insumo: 5, insumo: 'Paquete de 3 rollos de Toalla de papel',opciones:''},
            {n_insumo: 4, insumo: 'Botella de cloro de 4 lts',opciones:''},
            {n_insumo: 2, insumo: 'Caja de guantes de latex de 100 unidades',opciones:''}];
            this.Insumos =
            [{ n_insumo: 101, insumo: 'Alexis Canessa, Fabian Contreras', opciones: '02/07/2021',  },
          
            ];
    }

    getHistorialInsumos(){
        return this.Historial_Insumos
      }
      getInsumos(){
        return this.Insumos
      }
}