export interface Area {
    n_area: number;
    nombre_area: string;
}

export interface Reserva {
    nombre: string;
    fecha: string;
    n_area: number;
    nombre_area: string;
}

export interface Reserva_comunidad {
    n_area: number;
    fecha: Date;
}