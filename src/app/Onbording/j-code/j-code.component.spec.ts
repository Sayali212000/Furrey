import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JCodeComponent } from './j-code.component';

describe('JCodeComponent', () => {
  let component: JCodeComponent;
  let fixture: ComponentFixture<JCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
