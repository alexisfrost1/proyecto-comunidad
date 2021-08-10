import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Roles } from 'src/app/services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';
import { Mantencion } from './mantenciones.model';

@Injectable({
  providedIn: 'root'
})
export class MantencionesService {

    private bitacoraAccess: boolean;
    private roles: Roles[];

    private mantenciones: Mantencion[];
    //private mantenciones$ = new Subject<Mantencion[]>();
    /*private o_mantenciones$: Observable<Mantencion[]>;*/

    private stopMantenciones = new Subject();

    constructor(
        private http: HttpClient,
        private rolesService: RolesService
    ) {
        this.bitacoraAccess = this.rolesService.bitacoraState();
        this.roles = this.rolesService.Roles();

        this.mantenciones = [];

        //this.o_mantenciones$ = timer(1, 3000).pipe(
        //    switchMap(() => http.get<Area[]>('http://localhost:8000/currencyInfo')),
        //    retry(),
        //    tap(console.log),
        //    share(),
        //    takeUntil(this.stopMantenciones)
        //);
    }

    getMantenciones() {
        return this.mantenciones;
    }

    //getMantenciones(): Observable<Mantencion[]>{
    //    return this.o_mantenciones$;
    //}

    addMantencion() {
    }

    updateMantencion() {
    }

    deleteMantencion() {
    }
}