import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from 'src/app/services/roles.model';
import { RolesService } from 'src/app/services/roles.service';
import { departamento, encomienda, encomiendaConserje, tipoEncomienda } from './encomiendas.model'

@Injectable({
  providedIn: 'root'
})
export class EncomiendasService {
  private bitacoraAccess: boolean;
  private roles: Roles[];
  private Encomiendas: encomienda[];
  private Historial_Encomiendas: encomienda[];
  private Departamentos: departamento[];
  private tipoEncomiendas: tipoEncomienda[];
  private EncomiendasConserje: encomiendaConserje[];
  private Historial_EncomiendasConserje: encomiendaConserje[]; 
  constructor(
      private http: HttpClient,
      private rolesService: RolesService
    ) { 
    this.bitacoraAccess = this.rolesService.bitacoraState();
    this.roles = this.rolesService.Roles();

    this.Encomiendas = [{Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada'},
    {Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:''}];
  
    this.Historial_Encomiendas = [{Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'16/05/2021 09:20', comentario:''},
    {Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'20/06/2021 17:30', comentario:'Caja pequeña'},
    {Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada'},
    {Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:''}];
  

    this.Departamentos = [{ n_departamento: 1, departamento: 'Departamento_1' },
    { n_departamento: 2, departamento: 'Departamento_2' },
    { n_departamento: 3, departamento: 'Departamento_3' }];

    this.tipoEncomiendas = [{ n_encomienda: 1, tipo:'Diario'},
    { n_encomienda: 2, tipo:'Encomienda'},
    { n_encomienda: 3, tipo:'Sobre'},
    { n_encomienda: 4, tipo:'Carta'}];

    this.EncomiendasConserje = [{Depto: 1 ,Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada', opciones:''},
    {Depto: 1 ,Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:'', opciones:''}];
  
    this.Historial_EncomiendasConserje =   [{Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'16/05/2021 09:20', comentario:'', opciones:''},
    {Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'20/06/2021 17:30', comentario:'Caja pequeña', opciones:''},
    {Depto: 5, Destinatario: 'Alexis Canessa', tipo: 'Encomienda', entregada_por: 'Chilexpress', recibe:'Conserje', fecha:'26/07/2021 10:20', comentario:'Caja grande y pesada', opciones:''},
    {Depto: 1, Destinatario: 'Fabian Contreras', tipo: 'Sobre', entregada_por: 'Correos', recibe:'Conserje', fecha:'28/07/2021 10:20', comentario:'', opciones:''}];
   
  }
  getEncomiendas(){
    return this.Encomiendas
  }
  getHistorial_Encomiendas(){
    return this.Historial_Encomiendas
  }
 getDepartamentos(){
    return this.Departamentos
  }

  getTipoEncomiendas(){
    return this.tipoEncomiendas
  }

  getEncomiendasConserje(){
    return this.EncomiendasConserje
  }

  getHistorialEncomiendas(){
    return this.Historial_EncomiendasConserje
  }
}
