import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAppComponent } from './clientes-app.component';

describe('ClientesAppComponent', () => {
  let component: ClientesAppComponent;
  let fixture: ComponentFixture<ClientesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
