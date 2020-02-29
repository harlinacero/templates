import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCostCenterComponent } from './popup-cost-center.component';

describe('PopupCostCenterComponent', () => {
  let component: PopupCostCenterComponent;
  let fixture: ComponentFixture<PopupCostCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCostCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
