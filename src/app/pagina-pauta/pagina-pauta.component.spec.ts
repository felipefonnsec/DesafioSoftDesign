import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPautaComponent } from './pagina-pauta.component';

describe('PaginaPautaComponent', () => {
  let component: PaginaPautaComponent;
  let fixture: ComponentFixture<PaginaPautaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaPautaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaPautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
