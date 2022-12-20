import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { Area, Reserva, Reserva_comunidad } from './reservas.model';
import { ReservasService } from './reservas.service';
import { RolesService } from 'src/app/Services/roles.service';
import { Subject, takeUntil } from 'rxjs';
import { MatCalendar, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

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

    minDate: Date;
    maxDate: Date;
    
    reserva: Reserva;

    bBitacora: boolean;

    // Table
    reservas = new MatTableDataSource<Reserva>();
    displayedColumns: string[] = ['rut','nombre', 'fecha', 'nombre_area', 'opciones'];
    // Data
    areaComun: Area[] = [];
    reservasComunidad: Reserva_comunidad[] = [];
    fechas_nodisponibles: Date[] = [];

    unsubscribe = new Subject();

    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
    tabReserva: number = 0;

    constructor(
        private reservasService: ReservasService,
        private roles: RolesService,
        public dialog: MatDialog
    ) {
        this.bBitacora = this.roles.bitacoraState();

        if (this.bBitacora) {
            this.displayedColumns = ['rut','nombre', 'fecha', 'nombre_area'];
        }

        this.reserva = this.defaultReserva();

        //* Rango de fechas en las que es posible reservar*//
        this.minDate = new Date();
        this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));

    }

    defaultReserva(){
        return {
            nombre: "",
            rut: "",
            fecha: undefined,
            n_area: 0
        };
    }

    dateString(d: any){
        if(d!= undefined){
            d = d.toLocaleDateString();
        }
        return d;
    }

    fechasReserva() {

        this.fechas_nodisponibles = [];

        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (this.reserva.n_area == this.reservasComunidad[i].n_area) {
                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
            }

        }
        this.reserva.fecha = undefined;
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
            data: {
                index:   i,
                areaComun: this.areaComun,
                reservasComunidad: this.reservasComunidad
            },      
        });

        editModal.afterClosed().subscribe(result => {

            if (result != undefined) {
                this.reservasService.updateReserva(result,i);
                console.log('Cambios realizados en la posición',i);
            } else {
                console.log('Cambios cancelados');
                editModal.close();
            }
        });

    }

    Cancelar(i: number) {
        this.reservasService.deleteReserva(i);
    }

    Submit() {

        this.reservasService.addReserva(this.reserva);
        this.reserva = this.defaultReserva();
        this.tabReserva = 1;
    }

    ngOnInit(): void {

        this.reservasService.getAreas$().pipe(takeUntil(this.unsubscribe)).subscribe({
            next: (data) => {
                this.areaComun = data;
            },
            error: (error) => {
                console.log(error)
            },
            complete: () => {}
        });

        this.reservasService.getReservas$().pipe(takeUntil(this.unsubscribe)).subscribe({
            next: (data) => {
                this.reservas.data = data;
            },
            error: (error) => {
                console.log(error)
            },
            complete: () => {}
        });

        this.reservasService.getReservasComunidad$().pipe(takeUntil(this.unsubscribe)).subscribe({
            next: (data) => {
                this.reservasComunidad = data;
            },
            error: (error) => {
                console.log(error)
            },
            complete: () => {}
        });

    }

    ngOnDestroy() {
        this.unsubscribe.next(true);
        this.unsubscribe.complete();
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

    reserva: Reserva;
    areaComun: Area[] = [];
    reservasComunidad: Reserva_comunidad[] = [];

    fechas_nodisponibles: Date[] = [];

    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;

    constructor(
        private editModal: MatDialogRef<editReservas>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private reservasService: ReservasService
    ) {
        this.minDate = new Date();
        this.maxDate = new Date((new Date()).setDate((new Date()).getDate() + 90));
        this.index = data.index;

        this.areaComun = data.areaComun;
        this.reserva = this.reservasService.getReserva(this.index);
        this.reservasComunidad = data.reservasComunidad;

        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (this.index != i) {
                if (this.reserva.n_area == this.reservasComunidad[i].n_area) {
                                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
                }
            }

        }

    }

    fechasReserva() {

        this.fechas_nodisponibles = [];
        for (var i = 0; i < this.reservasComunidad.length; i++) {

            if (this.reserva.n_area == this.reservasComunidad[i].n_area) {
                this.fechas_nodisponibles.push(new Date(this.reservasComunidad[i].fecha));
            }
        }
        this.reserva.fecha = undefined;
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

    onConfirm(): void {
        this.editModal.close(this.reserva);
    }

    onNoClick(): void {
        this.editModal.close();
    }
}
