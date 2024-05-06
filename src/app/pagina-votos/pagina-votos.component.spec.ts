import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVotosComponent } from './pagina-votos.component';

describe('PaginaVotosComponent', () => {
  let component: PaginaVotosComponent;
  let fixture: ComponentFixture<PaginaVotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaVotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
