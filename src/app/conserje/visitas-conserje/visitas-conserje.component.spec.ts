import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasConserjeComponent } from './visitas-conserje.component';

describe('VisitasConserjeComponent', () => {
  let component: VisitasConserjeComponent;
  let fixture: ComponentFixture<VisitasConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
