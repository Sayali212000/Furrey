import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCodeComponent } from './c-code.component';

describe('CCodeComponent', () => {
  let component: CCodeComponent;
  let fixture: ComponentFixture<CCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
