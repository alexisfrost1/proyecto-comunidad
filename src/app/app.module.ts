import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ReservasComponent } from './Pages/reservas/reservas.component';
import { GastosComunesComponent } from './Pages/gastos-comunes/gastos-comunes.component';
import { MantencionesComponent } from './Pages/mantenciones/mantenciones.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VisitasConserjeComponent } from './conserje/visitas-conserje/visitas-conserje.component';
import { HomeConserjeComponent } from './conserje/home-conserje/home-conserje.component';
import { MainNavConserjeComponent } from './conserje/main-nav-conserje/main-nav-conserje.component';
import { InicioConserjeComponent } from './conserje/inicio-conserje/inicio-conserje.component';
import { ReservasConserjeComponent } from './conserje/reservas-conserje/reservas-conserje.component';
import { MantencionesConserjeComponent } from './conserje/mantenciones-conserje/mantenciones-conserje.component';
import { EncomiendasConserjeComponent } from './conserje/encomiendas-conserje/encomiendas-conserje.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'; 

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
    VisitasConserjeComponent,
    HomeConserjeComponent,
    MainNavConserjeComponent,
    InicioConserjeComponent,
    ReservasConserjeComponent,
    MantencionesConserjeComponent,
    EncomiendasConserjeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
