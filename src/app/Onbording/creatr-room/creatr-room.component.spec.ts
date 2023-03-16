import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatrRoomComponent } from './creatr-room.component';

describe('CreatrRoomComponent', () => {
  let component: CreatrRoomComponent;
  let fixture: ComponentFixture<CreatrRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatrRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatrRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
