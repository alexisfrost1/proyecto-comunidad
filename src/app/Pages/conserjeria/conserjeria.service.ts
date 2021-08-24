import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Roles } from 'src/app/services/roles.model';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';
import { Conserjeria } from './conserjeria.model';

@Injectable({
  providedIn: 'root'
})
export class ConserjeriaService {

    private roles: Roles[] = [];
    private roles$: Observable<Roles[]>;

    private conserjeria: Conserjeria[];
    //private conserjeria$ = new Subject<Conserjeria[]>();
    /*private o_conserjeria$: Observable<Conserjeria[]>;*/

    private stopConserjeria = new Subject();

    constructor(
        private http: HttpClient,
        private rolesService: RolesService
    ) {
        this.roles$ = this.rolesService.getRoles$();
        this.roles$.subscribe(roles => this.roles = roles);

        this.conserjeria = [];

        //this.o_conserjeria$ = timer(1, 3000).pipe(
        //    switchMap(() => http.get<Area[]>('http://localhost:8000/currencyInfo')),
        //    retry(),
        //    tap(console.log),
        //    share(),
        //    takeUntil(this.stopConserjeria)
        //);
    }

    getConserjeria() {
        return this.conserjeria;
    }

    //getConserjeria(): Observable<Conserjeria[]>{
    //    return this.o_Conserjeria$;
    //}

    addConserjeria() {
    }

    updateConserjeria() {
    }

    deleteConserjeria() {
    }
}
