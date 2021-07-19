import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavConserjeComponent } from './main-nav-conserje.component';

describe('MainNavConserjeComponent', () => {
  let component: MainNavConserjeComponent;
  let fixture: ComponentFixture<MainNavConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
