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
import { editReservas, ReservasComponent } from './Pages/reservas/reservas.component';
import { GastosComunesComponent } from './Pages/gastos-comunes/gastos-comunes.component';
import { MantencionesComponent } from './Pages/mantenciones/mantenciones.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BitacoraComponent } from './Pages/bitacora/bitacora.component'; 
import { MatTimepickerModule } from 'mat-timepicker';
import { RolesService } from './services/roles.service';
import { MatDialogModule } from '@angular/material/dialog';

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
    InicioComponent,
    BitacoraComponent,
    editReservas
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
    MatDialogModule
  ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, RolesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
