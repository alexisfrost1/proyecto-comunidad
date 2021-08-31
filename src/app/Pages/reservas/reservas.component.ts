import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { Area, Reserva, Reserva_comunidad } from './reservas.model';
import { ReservasService } from './reservas.service';
import { RolesService } from 'src/app/services/roles.service';
import { Observable } from 'rxjs';
import { MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-reservas',
    templateUrl: './reservas.component.html',
    styleUrls: ['./reservas.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ReservasService
    ]
})

export class ReservasComponent implements OnInit, OnDestroy {

    //o_areaComun$: Observable<Area[]>;
    //o_reservasUnidad$: Observable<Reserva_comunidad[]>;
    //o_reservasComunidad$: Observable<Reserva[]>;

    minDate: Date;
    maxDate: Date;
    fechaReserva: Date | any;
    nombre: string | any;
    rut: string | any;
    nReserva: number | undefined;
    bBitacora: boolean;

    reservas = new MatTableDataSource<Reserva>();
    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
    tabReserva: number = 0;

    areaComun: Area[] ;
    reservasComunidad: Reserva_comunidad[] ;
    fechas_nodisponibles: Date[] = [];
    displayedColumns: string[] = ['rut','nombre', 'fecha', 'n_area', 'nombre_area', 'opciones'];

    constructor(
        private reservasService: ReservasService,
        private roles: RolesService,
        public dialog: MatDialog
    ) {
        this.bBitacora = this.roles.bitacoraState();

        if (this.bBitacora) {
            this.displayedColumns = ['rut','nombre', 'fecha', 'n_area', 'nombre_area'];
        }

        this.nReserva = 0;

        //* Rango de fechas en las que es posible reservar*//
        this.minDate = new Date();
        this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

        //this.o_areaComun$ =         reservasService.getAreas();
        //this.o_reservasUnidad$ =    reservasService.getReservas();
        //this.o_reservasComunidad$ = reservasService.getReservasComunidad();

        this.areaComun = reservasService.getAreas();
        this.reservas.data = reservasService.getReservas();
        this.reservasComunidad = reservasService.getReservasComunidad();

    }

    fechasReserva() {

        this.fechas_nodisponibles = [];

        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (this.nReserva == this.reservasComunidad[i].n_area) {
                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
            }

        }
        this.fechaReserva = undefined;
        this.calendar.updateTodaysDate();
    }

    //* Marca las fechas reservadas anteriormente en el calendario*//
    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
        // Only highligh dates inside the month view.
        if (view === 'month') {
            /* const date = cellDate.getDate();*/
            // Highlight the 1st and 20th day of each month.
            return this.fechas_nodisponibles.some(
                (d: Date) =>
                    d.getDate() === cellDate.getDate() &&
                    d.getMonth() === cellDate.getMonth() &&
                    d.getFullYear() === cellDate.getFullYear()
            ) ? 'fecha-reservada' : '';
        }

        return '';
    }

    Reagendar(i: number):void {

        const editModal = this.dialog.open(editReservas, {
            width: '60%',
            data: {
                index:       i,
                nombre:      this.reservas.data[i].nombre,
                rut:         this.reservas.data[i].rut,
                fecha:       this.reservas.data[i].fecha,
                n_area:      this.reservas.data[i].n_area,
                nombre_area: this.reservas.data[i].nombre_area
            },
            
        });

        editModal.afterClosed().subscribe(result => {
            
            if (!(result == undefined)) {
                this.reservas.data[i].nombre      = result.nombre;
                this.reservas.data[i].rut         = result.rut;
                this.reservas.data[i].fecha       = result.fecha;
                this.reservas.data[i].n_area      = result.n_area;
                this.reservas.data[i].nombre_area = result.nombre_area;
                console.log('Cambios realizados en la posición',i);
            } else {
                console.log('Cambios cancelados');
                editModal.close();
            }
 
        });

    }

    Cancelar(i: number) {
        this.reservasService.deleteReserva(i);
        this.reservas.data = this.reservasService.getReservas();
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
        this.reservasService.ngOnDestroy();
    }

    Submit() {

        this.nReserva = 0;
        this.fechaReserva = undefined;
        this.nombre = '';
        this.rut = '';
        this.tabReserva = 1;
    }

}

// Modal pop-up Reagendar(i) 
@Component({
    selector: 'edit-reservas',
    templateUrl: './edit-reservas.html',
    styleUrls: ['./reservas.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ReservasService
    ]
})

export class editReservas {

    minDate: Date;
    maxDate: Date;
    index: number;

    //o_areaComun$: Observable<Area[]>;
    //o_reservasUnidad$: Observable<Reserva_comunidad[]>;
    //o_reservasComunidad$: Observable<Reserva[]>;

    areaComun: Area[];
    reservasComunidad: Reserva_comunidad[];

    fechas_nodisponibles: Date[] = [];

    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;

    constructor(
        public editModal: MatDialogRef<editReservas>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private reservasService: ReservasService,
        private roles: RolesService,
    ) {
        this.minDate = new Date();
        this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));
        this.index = data.index;

        //this.o_areaComun$ =         reservasService.getAreas();
        //this.o_reservasComunidad$ = reservasService.getReservasComunidad();

        this.areaComun = reservasService.getAreas();
        this.reservasComunidad = reservasService.getReservasComunidad();

        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (!(this.index == i)) {
                if (this.data.n_area == this.reservasComunidad[i].n_area) {
                                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
                }
            }

        }

    }

    fechasReserva() {

        this.fechas_nodisponibles = [];

        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (!(this.index == i)) {
                if (this.data.n_area == this.reservasComunidad[i].n_area) {
                    this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
                }
            }

        }
        this.data.fecha = undefined;
        this.calendar.updateTodaysDate();
    }

    //* Marca las fechas reservadas anteriormente en el calendario*//
    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
        // Only highligh dates inside the month view.
        if (view === 'month') {
            /* const date = cellDate.getDate();*/
            // Highlight the 1st and 20th day of each month.
            return this.fechas_nodisponibles.some(
                (d: Date) =>
                    d.getDate() === cellDate.getDate() &&
                    d.getMonth() === cellDate.getMonth() &&
                    d.getFullYear() === cellDate.getFullYear()
            ) ? 'fecha-reservada' : '';
        }

        return '';
    }

    onNoClick(): void {
        this.editModal.close();
    }
}
