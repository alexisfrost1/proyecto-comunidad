import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConserjeComponent } from './conserje.component';

describe('ConserjeComponent', () => {
  let component: ConserjeComponent;
  let fixture: ComponentFixture<ConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
