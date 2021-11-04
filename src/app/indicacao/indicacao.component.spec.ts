import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoComponent } from './indicacao.component';

describe('IndicacaoComponent', () => {
  let component: IndicacaoComponent;
  let fixture: ComponentFixture<IndicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
