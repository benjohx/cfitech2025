import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousMedecinsComponent } from './rendez-vous-medecins.component';

describe('RendezVousMedecinsComponent', () => {
  let component: RendezVousMedecinsComponent;
  let fixture: ComponentFixture<RendezVousMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendezVousMedecinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezVousMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
