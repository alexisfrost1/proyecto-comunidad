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
import { BitacoraComponent } from './Pages/bitacora/bitacora.component';
import { AdminComponent } from './Route/admin/admin.component';
import { ConserjeComponent } from './Route/conserje/conserje.component';
import { PropietarioComponent } from './Route/propietario/propietario.component';
import { FondosComponent } from './Pages/fondos/fondos.component';
import { IngresosComponent } from './Pages/ingresos/ingresos.component';
import { EgresosComponent } from './Pages/egresos/egresos.component';
import { PanelComponent } from './Pages/panel/panel.component';
import { PropiedadesComponent } from './Pages/propiedades/propiedades.component';
import { CobrosIndividualesComponent } from './Pages/cobros-individuales/cobros-individuales.component';
import { ColillasComponent } from './Pages/colillas/colillas.component';
import { DeudasComponent } from './Pages/deudas/deudas.component';
import { RecaudacionComponent } from './Pages/recaudacion/recaudacion.component';
import { RemuneracionesComponent } from './Pages/remuneraciones/remuneraciones.component';
import { TotalesMensualesComponent } from './Pages/totales-mensuales/totales-mensuales.component';
import { AuthGuard } from './auth.guard';
import { InsumosComponent } from './Pages/insumos/insumos.component';

const routes: Routes = [

{ path: 'admin', component: AdminComponent,
    children:[
    {
        path: ':comunidad',
        children: [
            { path: 'encomiendas', component: EncomiendasComponent },
            { path: 'mantenciones', component: MantencionesComponent },
            { path: 'reservas', component: ReservasComponent },
            { path: 'visitas', component: VisitasComponent },
            { path: 'home', component: HomeComponent },
            { path: 'bitacora', component: BitacoraComponent },
            { path: 'fondos', component: FondosComponent},
            { path: 'ingresos', component: IngresosComponent},
            { path: 'egresos', component: EgresosComponent},
            { path: 'panel', component: PanelComponent},
            { path: 'propiedades', component: PropiedadesComponent},
            { path: 'cobros-individuales', component: CobrosIndividualesComponent},
            { path: 'colillas', component: ColillasComponent},
            { path: 'deudas', component: DeudasComponent},
            { path: 'recaudacion', component: RecaudacionComponent},
            { path: 'remuneraciones', component: RemuneracionesComponent},
            { path: 'totales-mensuales', component: TotalesMensualesComponent}
        ]
    }]
},

{
    path: 'conserje', component: ConserjeComponent,
    children:[
    {
        path: ':comunidad',
        children: [
            { path: 'encomiendas', component: EncomiendasComponent },
            { path: 'mantenciones', component: MantencionesComponent },
            { path: 'reservas', component: ReservasComponent },
            { path: 'visitas', component: VisitasComponent },
            { path: 'home', component: HomeComponent },
            { path: 'bitacora', component: BitacoraComponent },
            {path: 'insumos', component: InsumosComponent }
        ]
    }]
},

{
    path: 'propietario', component: PropietarioComponent,
    children:[
    {
        path: ':comunidad',
        children: [
            { path: 'encomiendas', component: EncomiendasComponent },
            { path: 'mantenciones', component: MantencionesComponent },
            { path: 'reservas', component: ReservasComponent },
            { path: 'visitas', component: VisitasComponent },
            { path: 'home', component: HomeComponent },
        ]
    }]
},

{path: 'login', component: LoginComponent},
{path: '' , redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
