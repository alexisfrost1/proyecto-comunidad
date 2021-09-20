import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VisitasComponent } from './Pages/visitas/visitas.component';
import { EncomiendasComponent } from './Pages/encomiendas/encomiendas.component';
import { GastosComunesComponent } from './Pages/gastos-comunes/gastos-comunes.component';
import { MantencionesComponent } from './Pages/mantenciones/mantenciones.component';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BitacoraComponent } from './Pages/bitacora/bitacora.component'; 
import { MatTimepickerModule } from 'mat-timepicker';
import { RolesService } from './services/roles.service';
import { MatDialogModule } from '@angular/material/dialog';
import { editReservas, ReservasComponent } from './Pages/reservas/reservas.component';
import { ConserjeriaComponent, newConserjeria } from './Pages/conserjeria/conserjeria.component';
import { AdminComponent } from './Route/admin/admin.component';
import { ConserjeComponent } from './Route/conserje/conserje.component';
import { PropietarioComponent } from './Route/propietario/propietario.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

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
    PropietarioComponent
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
    MatSidenavModule,
    MatTabsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatTimepickerModule,
    MatDialogModule,
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
