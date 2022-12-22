export interface Area {
    n_area: number;         // id_unidad del �rea com�n
    nombre_area: string;
}

export interface Reserva {
    nombre: string;
    rut: string;
    fecha: Date | any;
    n_area: number | any;         // id_unidad del �rea com�n
}

export interface Reserva_comunidad {
    n_area: number;         // id_unidad del �rea com�n
    fecha: Date;
}