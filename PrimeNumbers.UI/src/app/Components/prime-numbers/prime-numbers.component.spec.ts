import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbersComponent } from './prime-numbers.component';

describe('PrimeNumbersComponent', () => {
  let component: PrimeNumbersComponent;
  let fixture: ComponentFixture<PrimeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
