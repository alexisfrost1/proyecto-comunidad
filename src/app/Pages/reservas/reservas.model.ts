export interface Area {
    n_area: number;
    nombre_area: string;
}

export interface Reserva {
    nombre: string;
    rut: string | any;
    fecha: Date | any;
    n_area: number;         // id_unidad del área común
    nombre_area: string;
}

export interface Reserva_comunidad {
    n_area: number;         // id_unidad del área común
    fecha: Date;
}