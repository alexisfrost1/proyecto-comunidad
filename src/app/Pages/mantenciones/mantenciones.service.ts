import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/Services/roles.service';
import { Roles } from 'src/app/Services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';
import { Mantencion } from './mantenciones.model';

@Injectable({
  providedIn: 'root'
})
export class MantencionesService {

    private bitacoraAccess: boolean;
    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;

    private mantenciones: Mantencion[];
    //private mantenciones$ = new Subject<Mantencion[]>();
    /*private o_mantenciones$: Observable<Mantencion[]>;*/

    private stopMantenciones = new Subject();

    constructor(
        private http: HttpClient,
        private rolesService: RolesService
    ) {
        this.bitacoraAccess = this.rolesService.bitacoraState();
        this.roles$ = this.rolesService.getRoles$();
        this.roles$.subscribe(roles => this.roles = roles);

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