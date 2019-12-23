import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuTerceiroComponenteComponent } from './meu-terceiro-componente.component';

describe('MeuTerceiroComponenteComponent', () => {
  let component: MeuTerceiroComponenteComponent;
  let fixture: ComponentFixture<MeuTerceiroComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuTerceiroComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuTerceiroComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
