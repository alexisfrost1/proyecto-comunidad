import { Injectable, OnDestroy } from '@angular/core';
import { RolesService } from 'src/app/Services/roles.service';
import { Roles } from 'src/app/Services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject, BehaviorSubject } from 'rxjs';
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

    private areas$ = new BehaviorSubject<Area[]>([]);
    private reservas_comunidad$ = new BehaviorSubject<Reserva_comunidad[]>([]);
    private reservas$ = new BehaviorSubject<Reserva[]>([]);

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
            [{ nombre: 'Alexis Canessa',   rut: 'asdad',  fecha: ((new Date())),                                                 n_area: 1 },
             { nombre: 'Alexis Canessa',   rut: 'asdad',  fecha: (new Date((new Date()).setDate((new Date()).getDate() + 2))),   n_area: 3 },
             { nombre: 'Fabian Contreras', rut: 'asdad',  fecha: (new Date((new Date()).setDate((new Date()).getDate() + 20))),  n_area: 2 }];
 
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
        
        this.areas$.next(this.areas);
        this.reservas$.next(this.reservas);
        this.reservas_comunidad$.next(this.reservas_comunidad);

    }

    getArea() {
        return this.areas;
    }

    getReserva(i: number) {
        return this.reservas[i];
    }

    getReservasComunidad() {
        return this.reservas_comunidad;
    }

    getAreas$(): Observable<Area[]>{
       return this.areas$;
    }

    getReservas$(): Observable<Reserva[]>{
       return this.reservas$;
    }

    getReservasComunidad$(): Observable<Reserva_comunidad[]>{
       return this.reservas_comunidad$;
    }

    addReserva(reserva: Reserva) {

        this.reservas.push(reserva);
        this.reservas$.next(this.reservas);

        this.reservas_comunidad.push({
            n_area: reserva.n_area,
            fecha:  reserva.fecha
        });
        this.reservas_comunidad$.next(this.reservas_comunidad);
    }

    updateReserva(reserva: Reserva, i: number) {

        this.reservas[i] = reserva;
        this.reservas$.next(this.reservas);
    }

    deleteReserva(i: number) {

        this.reservas_comunidad.forEach((value, index) => {
            if ( (value.n_area == this.reservas[i].n_area) && (value.fecha == this.reservas[i].fecha) ) this.reservas_comunidad.splice(index, 1);
        });
        this.reservas_comunidad$.next(this.reservas_comunidad);

        this.reservas.forEach((reserva,index) => {
            if (index == i) this.reservas.splice(index,1);
        });
        this.reservas$.next(this.reservas);

    }

    ngOnDestroy() {
        
    }

}
