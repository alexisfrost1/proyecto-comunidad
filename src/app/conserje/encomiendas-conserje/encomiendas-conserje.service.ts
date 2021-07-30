import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encomienda, departamento, tipoEncomienda  } from './encomiendas-conserje.model'


@Injectable({
  providedIn: 'root'
})
export class EncomiendasConserjeService {

  private Departamentos: departamento[];
  private tipoEncomiendas: tipoEncomienda[];
  private Encomiendas: encomienda[];
  private Historial_Encomiendas: encomienda[]; 

  constructor(private http: HttpClient) { 
    this.Departamentos = [{ n_departamento: 1, departamento: 'Departamento_1' },
    { n_departamento: 2, departamento: 'Departamento_2' },
    { n_departamento: 3, departamento: 'Departamento_3' }];

    this.tipoEncomiendas = [{ n_encomienda: 1, tipo:'Diario'},
    { n_encomienda: 2, tipo:'Encomienda'},
    { n_encomienda: 3, tipo:'Sobre'},
    { n_encomienda: 4, tipo:'Carta'}];

    this.Encomiendas = [{Depto: 1 ,Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada', opciones:''},
    {Depto: 1 ,Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:'', opciones:''}];
  
    this.Historial_Encomiendas =   [{Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'16/05/2021 09:20', comentario:'', opciones:''},
    {Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'20/06/2021 17:30', comentario:'Caja pequeña', opciones:''},
    {Depto: 5, Destinatario: 'Alexis Canessa', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada', opciones:''},
    {Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:'', opciones:''}];
   
  }

  getDepartamentos(){
    return this.Departamentos
  }

  getTipoEncomiendas(){
    return this.tipoEncomiendas
  }

  getEncomiendas(){
    return this.Encomiendas
  }

  getHistorialEncomiendas(){
    return this.Historial_Encomiendas
  }
}
