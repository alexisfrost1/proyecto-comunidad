import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Roles } from 'src/app/services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';
import { Conserjeria, Lugar, Unidad } from './conserjeria.model';

@Injectable({
  providedIn: 'root'
})
export class ConserjeriaService {

    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;

    private conserjeria: Conserjeria[];
    private motivo: string[];
    private lugar: Lugar[];
    private unidad: Unidad[];

    //private conserjeria$ = new Subject<Conserjeria[]>();
    //private o_conserjeria$: Observable<Conserjeria[]>;
    //private o_lugar$: Observable<Conserjeria[]>;
    //private o_unidad$: Observable<Conserjeria[]>;

    private stopConserjeria = new Subject();

    constructor(
        private http: HttpClient,
        private rolesService: RolesService
    ) {
        this.roles$ = this.rolesService.getRoles$();
        this.roles$.subscribe(roles => this.roles = roles);

        this.conserjeria = [];

        this.motivo = ['Queja', 'Accion', 'Entrega de llaves', 'Devolucion de llaves', 'Recaudacion'];
        this.lugar = [];
        this.unidad = [];

        //this.o_conserjeria$ = timer(1, 3000).pipe(
        //    switchMap(() => http.get<Area[]>('http://localhost:8000/currencyInfo')),
        //    retry(),
        //    tap(console.log),
        //    share(),
        //    takeUntil(this.stopConserjeria)
        //);
    }

    getMotivo() {
        return this.motivo;
    }

    getConserjeria() {
        return this.conserjeria;
    }

    //getConserjeria(): Observable<Conserjeria[]>{
    //    return this.o_conserjeria$;
    //}

    getLugar() {
        return this.lugar;
    }

    //getLugar(): Observable<Lugar[]>{
    //    return this.o_lugar$;
    //}

    getUnidad() {
        return this.unidad;
    }

    //getUnidad(): Observable<Unidad[]>{
    //    return this.o_unidad$;
    //}

    addConserjeria() {
    }

    updateConserjeria() {
    }

    deleteConserjeria() {
    }
}
