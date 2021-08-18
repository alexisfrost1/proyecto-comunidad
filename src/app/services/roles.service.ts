import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Roles } from './roles.model';

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    private roles: Roles[];
    private roles$: Subject<Roles[]> = new Subject<Roles[]>();
    /*private o_roles$: Observable<Roles[]>;*/
    private bitacora: boolean;
    private bitacora$: Subject<boolean> = new Subject();

    constructor() {

        this.roles = [{
            admin: false,
            directorio: false,
            conserje: false,
            propietario: false,
            copropietario: false,
            comite: false
        }];

        this.bitacora = false;

    }

    loginRoles(tab: number) {
        if (tab == 0) {
            this.roles[0].propietario = true;
            this.roles[0].conserje = false;
            this.roles[0].admin = false;
        }
        if (tab == 1) {
            this.roles[0].propietario = false;
            this.roles[0].conserje = true;
            this.roles[0].admin = false;
        }
        if (tab == 2) {
            this.roles[0].propietario = false;
            this.roles[0].conserje = false;
            this.roles[0].admin = true;
        }
        this.roles$.next(this.roles);
    }

    getRoles$(): Observable<Roles[]>{
        return this.roles$.asObservable();
    }

    getRoles() {
        return this.roles;
    }

    getBitacora$(): Observable<boolean> {
        return this.bitacora$.asObservable();
    }

    getBitacora() {
        return this.bitacora;
    }

    bitacoraAccess() {
        this.bitacora = true;
    }

    bitacoraNgDestroy() {
        this.bitacora = false;
    }

    bitacoraState() {
        return this.bitacora;
    }

}
