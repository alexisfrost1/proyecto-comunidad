import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasConserjeComponent } from './reservas-conserje.component';

describe('ReservasConserjeComponent', () => {
  let component: ReservasConserjeComponent;
  let fixture: ComponentFixture<ReservasConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
