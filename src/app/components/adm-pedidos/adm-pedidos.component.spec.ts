import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPedidosComponent } from './adm-pedidos.component';

describe('AdmPedidosComponent', () => {
  let component: AdmPedidosComponent;
  let fixture: ComponentFixture<AdmPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
