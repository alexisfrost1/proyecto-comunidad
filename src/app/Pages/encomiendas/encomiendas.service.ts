import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encomienda } from './encomiendas.model'

@Injectable({
  providedIn: 'root'
})
export class EncomiendasService {

  private Encomiendas: encomienda[];
  private Historial_Encomiendas: encomienda[];

  constructor(private http: HttpClient) { 
    this.Encomiendas = [{Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada'},
    {Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:''}];
  
    this.Historial_Encomiendas = [{Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'16/05/2021 09:20', comentario:''},
    {Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'20/06/2021 17:30', comentario:'Caja pequeña'},
    {Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada'},
    {Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:''}];
  
  }
  getEncomiendas(){
    return this.Encomiendas
  }
  getHistorial_Encomiendas(){
    return this.Historial_Encomiendas
  }

}
