import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamemtoComponent } from './criar-pensamemto.component';

describe('CriarPensamemtoComponent', () => {
  let component: CriarPensamemtoComponent;
  let fixture: ComponentFixture<CriarPensamemtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensamemtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamemtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
