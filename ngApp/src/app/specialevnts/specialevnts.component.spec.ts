import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialevntsComponent } from './specialevnts.component';

describe('SpecialevntsComponent', () => {
  let component: SpecialevntsComponent;
  let fixture: ComponentFixture<SpecialevntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialevntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialevntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
