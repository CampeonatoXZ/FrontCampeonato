import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTorneioComponent } from './tipo-torneio.component';

describe('TipoTorneioComponent', () => {
  let component: TipoTorneioComponent;
  let fixture: ComponentFixture<TipoTorneioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTorneioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
