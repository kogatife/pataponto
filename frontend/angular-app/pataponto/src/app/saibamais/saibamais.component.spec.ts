import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibamaisComponent } from './saibamais.component';

describe('SaibamaisComponent', () => {
  let component: SaibamaisComponent;
  let fixture: ComponentFixture<SaibamaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaibamaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaibamaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
