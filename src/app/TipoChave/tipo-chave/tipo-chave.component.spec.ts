import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoChaveComponent } from './tipo-chave.component';

describe('TipoChaveComponent', () => {
  let component: TipoChaveComponent;
  let fixture: ComponentFixture<TipoChaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoChaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
