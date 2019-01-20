import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAttendedComponent } from './who-attended.component';

describe('WhoAttendedComponent', () => {
  let component: WhoAttendedComponent;
  let fixture: ComponentFixture<WhoAttendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAttendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAttendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
