import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConserjeComponent } from './home-conserje.component';

describe('HomeConserjeComponent', () => {
  let component: HomeConserjeComponent;
  let fixture: ComponentFixture<HomeConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
