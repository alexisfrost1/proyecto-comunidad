import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrosIndividualesComponent } from './cobros-individuales.component';

describe('CobrosIndividualesComponent', () => {
  let component: CobrosIndividualesComponent;
  let fixture: ComponentFixture<CobrosIndividualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrosIndividualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrosIndividualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
