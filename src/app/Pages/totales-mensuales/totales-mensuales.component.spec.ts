import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalesMensualesComponent } from './totales-mensuales.component';

describe('TotalesMensualesComponent', () => {
  let component: TotalesMensualesComponent;
  let fixture: ComponentFixture<TotalesMensualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalesMensualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalesMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
