import { Injectable, OnDestroy } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Roles } from 'src/app/services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';
import { Area, Reserva, Reserva_comunidad} from './reservas.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasService implements OnDestroy{

    private bitacoraAccess: boolean;
    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;

    private areas: Area[] = [];
    private reservas: Reserva[] = [];
    private reservas_comunidad: Reserva_comunidad[] = [];

    //// Emisor reservado para enviar nuevas reservas
    //private reservas$ = new Subject<Reserva[]>();

    //private o_areas$: Observable<Area[]>;
    //private o_reservas_comunidad$: Observable<Reserva_comunidad[]>;

    //private o_reservas$: Observable<Reserva[]>;

    private stopReservas = new Subject();

    constructor(
        private http: HttpClient,
        private rolesService: RolesService
    ) {
        this.bitacoraAccess = this.rolesService.bitacoraState();
        this.roles$ = this.rolesService.getRoles$();
        this.roles$.subscribe(roles => this.roles = roles);

        this.areas =
            [{ n_area: 1, nombre_area: 'Piscina Block n°3' },
            { n_area: 2, nombre_area: 'Quincho Terraza Block n°2' },
            { n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' }];

        this.reservas =
            [{ nombre: 'Alexis Canessa',   rut: 'asdad',  fecha: ((new Date())),                                                 n_area: 1, nombre_area: 'Piscina Block n°3' },
             { nombre: 'Alexis Canessa',   rut: 'asdad',  fecha: (new Date((new Date()).setDate((new Date()).getDate() + 2))),   n_area: 3, nombre_area: 'Cancha de futbol Plaza n°2' },
             { nombre: 'Fabian Contreras', rut: 'asdad',  fecha: (new Date((new Date()).setDate((new Date()).getDate() + 20))),  n_area: 2, nombre_area: 'Quincho Terraza Block n°2' }];
 
        this.reservas_comunidad =
            [{ n_area: 1, fecha: new Date() },
             { n_area: 1, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2) },
             { n_area: 1, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5) },
             { n_area: 1, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7) },
             { n_area: 2, fecha: new Date() },
             { n_area: 2, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4) },
             { n_area: 2, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6) },
             { n_area: 2, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10) },
             { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6) },
             { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 8) },
             { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 12) },
             { n_area: 3, fecha: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 17) }];

        //* Actualiza cada X segundos el array observable *//
        //this.o_areas$ = timer(1, 3000).pipe(
        //    switchMap(() => http.get<Area[]>('http://localhost:8000/currencyInfo')),
        //    retry(),
        //    tap(console.log),
        //    share(),
        //    takeUntil(this.stopReservas)
        //);

        //this.o_reservas$ = timer(1, 3000).pipe(
        //    switchMap(() => http.get<Reserva[]>('http://localhost:8000/currencyInfo')),
        //    retry(),
        //    tap(console.log),
        //    share(),
        //    takeUntil(this.stopReservas)
        //);

        //this.o_reservas_comunidad$ = timer(1, 3000).pipe(
        //    switchMap(() => http.get<Reserva_comunidad[]>('http://localhost:8000/currencyInfo')),
        //    retry(),
        //    tap(console.log),
        //    share(),
        //    takeUntil(this.stopReservas)
        //);

    }

    getAreas() {
        return this.areas;
    }

    getReservas() {
        return this.reservas;
    }

    getReservasComunidad() {
        return this.reservas_comunidad;
    }

    //getAreas(): Observable<Area[]>{
    //    return this.o_areas$;
    //}

    //getReservas(): Observable<Reserva[]>{
    //    return this.o_reservas$;
    //}

    //getReservasComunidad(): Observable<Reserva_comunidad[]>{
    //    return this.o_reservas_comunidad$;
    //}

    addNewReserva() {
    }

    updateReserva() {
    }

    deleteReserva(i: number) {

        this.reservas_comunidad.forEach((value, index) => {
            if ( (value.n_area == this.reservas[i].n_area) && (value.fecha == this.reservas[i].fecha) ) this.reservas_comunidad.splice(index, 1);
        });

        this.reservas.forEach((value,index) => {
            if (index == i) this.reservas.splice(index,1);
        });

    }

    ngOnDestroy() {
        this.stopReservas.next(true);
    }

}
