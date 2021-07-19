import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioConserjeComponent } from './inicio-conserje.component';

describe('InicioConserjeComponent', () => {
  let component: InicioConserjeComponent;
  let fixture: ComponentFixture<InicioConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
