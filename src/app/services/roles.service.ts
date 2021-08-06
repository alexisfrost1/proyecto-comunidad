import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Roles } from './roles.model';

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    private roles: Roles[];
    /*private o_roles$: Observable<Roles[]>;*/
    private bitacora: boolean;

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

    loginRoles(tab: number | null) {

        if (tab == 1) {
            this.roles[0].propietario = true;
            this.roles[0].conserje = false;
            this.roles[0].admin = false;
        }
        if (tab == 2) {
            this.roles[0].propietario = false;
            this.roles[0].conserje = true;
            this.roles[0].admin = false;
        }
        if (tab == 3) {
            this.roles[0].propietario = false;
            this.roles[0].conserje = false;
            this.roles[0].admin = true;
        }
        if (tab == null) {
        }
    }

    Roles() {
        return this.roles;
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
