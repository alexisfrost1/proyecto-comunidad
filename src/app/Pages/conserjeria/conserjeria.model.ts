export interface Conserjeria {
    id: number;
    rut: string;
    nombre: string;
    motivo: string;
    rut_ref: string;
    nombre_ref: string;
    descripcion: string;
    fecha: Date;
}

export interface Lugar {
    id: number;
    nombre: string;
    nro: number;
}

export interface Unidad {
    id: number;
    tipo: string;
    nro: number;
}
