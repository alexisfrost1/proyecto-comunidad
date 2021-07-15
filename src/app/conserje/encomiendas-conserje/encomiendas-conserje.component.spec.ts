import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomiendasConserjeComponent } from './encomiendas-conserje.component';

describe('EncomiendasConserjeComponent', () => {
  let component: EncomiendasConserjeComponent;
  let fixture: ComponentFixture<EncomiendasConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncomiendasConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomiendasConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
