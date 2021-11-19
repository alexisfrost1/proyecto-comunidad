import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColillasComponent } from './colillas.component';

describe('ColillasComponent', () => {
  let component: ColillasComponent;
  let fixture: ComponentFixture<ColillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
