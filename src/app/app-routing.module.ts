import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { EncomiendasComponent } from './Pages/encomiendas/encomiendas.component';
import { GastosComunesComponent } from './Pages/gastos-comunes/gastos-comunes.component';
import { MantencionesComponent } from './Pages/mantenciones/mantenciones.component';
import { ReservasComponent } from './Pages/reservas/reservas.component';
import { VisitasComponent } from './Pages/visitas/visitas.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { BitacoraComponent } from './Pages/bitacora/bitacora.component';
import { InsumosComponent } from './Pages/insumos/insumos.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
    {path: 'nav', component: MainNavComponent},
    {path: 'encomiendas', component: EncomiendasComponent},
    {path: 'mantenciones',component: MantencionesComponent},
    {path: 'reservas',component: ReservasComponent},
    {path: 'visitas', component: VisitasComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'gastos-comunes', component: GastosComunesComponent},
    {path: 'bitacora', component: BitacoraComponent},
    {path: 'insumos', component: InsumosComponent}
  ]},
  
  {path: 'login', component: LoginComponent},
  {path: '' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
