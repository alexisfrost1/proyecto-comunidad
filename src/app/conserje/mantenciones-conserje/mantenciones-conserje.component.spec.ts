import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantencionesConserjeComponent } from './mantenciones-conserje.component';

describe('MantencionesConserjeComponent', () => {
  let component: MantencionesConserjeComponent;
  let fixture: ComponentFixture<MantencionesConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantencionesConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantencionesConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
