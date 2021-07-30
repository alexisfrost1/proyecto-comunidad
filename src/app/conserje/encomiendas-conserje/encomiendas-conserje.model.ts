export interface encomienda {
    Depto: number;
    Destinatario: string;
    tipo: string;
    entregada_por: string;
    recibe: string;
    fecha: string;
    comentario: string;
    opciones: string;
  }
export interface departamento {
    n_departamento: number;
    departamento: string;
  }
export interface tipoEncomienda {
    n_encomienda: number;
    tipo: string;
  }