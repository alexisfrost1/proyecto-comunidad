// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './Pages/home/home.component';
import { VisitasComponent } from './Pages/visitas/visitas.component';
import { EncomiendasComponent } from './Pages/encomiendas/encomiendas.component';
import { GastosComunesComponent } from './Pages/gastos-comunes/gastos-comunes.component';
import { MantencionesComponent } from './Pages/mantenciones/mantenciones.component';
import { BitacoraComponent } from './Pages/bitacora/bitacora.component'; 
import { InsumosComponent } from './Pages/insumos/insumos.component';
import { PropiedadesComponent } from './Pages/propiedades/propiedades.component';
import { PanelComponent } from './Pages/panel/panel.component';
import { FondosComponent } from './Pages/fondos/fondos.component';
import { IngresosComponent } from './Pages/ingresos/ingresos.component';
import { EgresosComponent } from './Pages/egresos/egresos.component';
import { TotalesMensualesComponent } from './Pages/totales-mensuales/totales-mensuales.component';
import { CobrosIndividualesComponent } from './Pages/cobros-individuales/cobros-individuales.component';
import { ColillasComponent } from './Pages/colillas/colillas.component';
import { DeudasComponent } from './Pages/deudas/deudas.component';
import { RecaudacionComponent } from './Pages/recaudacion/recaudacion.component';
import { RemuneracionesComponent } from './Pages/remuneraciones/remuneraciones.component';
import { editReservas, ReservasComponent } from './Pages/reservas/reservas.component';
import { ConserjeriaComponent, newConserjeria } from './Pages/conserjeria/conserjeria.component';
import { AdminComponent } from './Route/admin/admin.component';
import { ConserjeComponent } from './Route/conserje/conserje.component';
import { PropietarioComponent } from './Route/propietario/propietario.component';
// Services
import { RolesService } from './services/roles.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
// Material
import { AngularMaterialModule } from './angular-material.module';
// Custom
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker'; 

export function tokenGetter() {
    return sessionStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainNavComponent,
    VisitasComponent,
    EncomiendasComponent,
    ReservasComponent,
    GastosComunesComponent,
    MantencionesComponent,
    BitacoraComponent,
    editReservas,
    ConserjeriaComponent,
    AdminComponent,
    ConserjeComponent,
    newConserjeria,
    PropietarioComponent,
    InsumosComponent,
    PropiedadesComponent,
    PanelComponent,
    FondosComponent,
    IngresosComponent,
    EgresosComponent,
    TotalesMensualesComponent,
    CobrosIndividualesComponent,
    ColillasComponent,
    DeudasComponent,
    RecaudacionComponent,
    RemuneracionesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatNativeDateModule,
    AngularMaterialModule,
    LayoutModule,
    HttpClientModule,
    NgxMatTimepickerModule,
      JwtModule.forRoot({
          config: {
              tokenGetter: tokenGetter,
              allowedDomains: [
                  'http://vm-06.epm.cl/'
              ],
              disallowedRoutes: [
                  'http://vm-06.epm.cl/api/auth/loginAdmin',
                  'http://vm-06.epm.cl/api/auth/loginConserje',
                  'http://vm-06.epm.cl/api/auth/loginPropietario'
              ]
          }
      })
  ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        RolesService,
        AuthService,
        AuthGuard
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
