export interface Ubicacion {
    id: number;
    alfa: string;         
    nombre_area: string;
}

export interface Unidad {
    id: number;
    id_ubicacion: number;
    nombre_ubicacion: string;
    alfa_ubicacion: string;
    rut_propietario: string;
    nombre_propietario: string;
    rut_copropietario: string;
    nombre_copropietario: string;
    tipo_unidad: string;
    alfa: string;
    saldo: number;
    copropiedad: number; //area en m2 de la propiedad
}