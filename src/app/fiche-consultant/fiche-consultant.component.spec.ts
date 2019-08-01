import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheConsultantComponent } from './fiche-consultant.component';

describe('FicheConsultantComponent', () => {
  let component: FicheConsultantComponent;
  let fixture: ComponentFixture<FicheConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
