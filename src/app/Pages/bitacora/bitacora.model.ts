export interface bitacora {
    Registro: number;
    Tipo: string;
    ingresado_por: string;
    fecha: string;
    departamento: number;
    comentario: string;
    opciones: string;
  }
export interface departamento {
    n_departamento: number;
    departamento: string;
  }
  
export interface registro {
    n_novedad: number;
    novedad: string;
  }
  
  