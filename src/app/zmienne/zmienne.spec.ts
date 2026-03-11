import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zmienne } from './zmienne';

describe('Zmienne', () => {
  let component: Zmienne;
  let fixture: ComponentFixture<Zmienne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zmienne],
    }).compileComponents();

    fixture = TestBed.createComponent(Zmienne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
