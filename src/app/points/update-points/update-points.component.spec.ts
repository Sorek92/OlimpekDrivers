import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePointsComponent } from './update-points.component';

describe('UpdatePointsComponent', () => {
  let component: UpdatePointsComponent;
  let fixture: ComponentFixture<UpdatePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
