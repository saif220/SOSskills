import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConsultantComponent } from './ajout-consultant.component';

describe('AjoutConsultantComponent', () => {
  let component: AjoutConsultantComponent;
  let fixture: ComponentFixture<AjoutConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
