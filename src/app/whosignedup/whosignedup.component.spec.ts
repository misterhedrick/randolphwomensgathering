import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosignedupComponent } from './whosignedup.component';

describe('WhosignedupComponent', () => {
  let component: WhosignedupComponent;
  let fixture: ComponentFixture<WhosignedupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhosignedupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosignedupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
