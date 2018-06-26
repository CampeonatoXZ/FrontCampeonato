import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTorneioComponent } from './cadastrar-torneio.component';

describe('CadastrarTorneioComponent', () => {
  let component: CadastrarTorneioComponent;
  let fixture: ComponentFixture<CadastrarTorneioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTorneioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
