import { Injectable, OnDestroy } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Roles } from 'src/app/services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';
import { Conserjeria, Lugar, Unidad } from './conserjeria.model';

@Injectable({
  providedIn: 'root'
})
export class ConserjeriaService implements OnDestroy{

    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;

    private conserjeria: Conserjeria[];
    private motivo: string[];
    private lugar: Lugar[];
    private unidades: Unidad[][];

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

        this.motivo = ['Entrega de llaves', 'Devolución de llaves', 'Recaudación', 'Queja', 'Acción', 'Otro'];

        this.lugar = [
            { id: 1, nombre: 'Block',       nro: 1 },
            { id: 2, nombre: 'Block',       nro: 2 },
            { id: 3, nombre: 'Cuadra',      nro: 1 },
            { id: 4, nombre: 'Cuadra',      nro: 2 },
            { id: 5, nombre: 'Piscinas',    nro: 1 },
            { id: 6, nombre: 'Multicancha', nro: 1 },
        ];

        this.unidades = [
            [
                { id: 1, tipo: 'Departamento', nro: 101 },
                { id: 2, tipo: 'Departamento', nro: 102 },
                { id: 3, tipo: 'Departamento', nro: 103 }
            ],           
            [            
                { id: 4, tipo: 'Departamento', nro: 201 },
                { id: 5, tipo: 'Departamento', nro: 202 },
                { id: 6, tipo: 'Departamento', nro: 203 }
            ],           
            [            
                { id: 7, tipo: 'Casa', nro: 3241 },
                { id: 8, tipo: 'Casa', nro: 3242 },
                { id: 9, tipo: 'Casa', nro: 3243 }
            ],           
            [            
                { id: 10,  tipo: 'Casa', nro: 4561 },
                { id: 11,  tipo: 'Casa', nro: 4562 },
                { id: 12,  tipo: 'Casa', nro: 4563 }
            ],           
            [            
                { id: 13,  tipo: 'Piscina', nro: 1 },
                { id: 14,  tipo: 'Piscina', nro: 2 },
                { id: 15,  tipo: 'Piscina', nro: 3 }
            ],           
            [            
                { id: 16,  tipo: 'Cancha de futbol', nro: 1 },
                { id: 17,  tipo: 'Cancha de futbol', nro: 2 },
                { id: 18,  tipo: 'Cancha de tenis', nro: 1 }
            ],
        ];

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
        return this.unidades;
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

    ngOnDestroy() {
        this.stopConserjeria.next(true);
    }
}
