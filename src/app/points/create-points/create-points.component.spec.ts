import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePointsComponent } from './create-points.component';

describe('CreatePointsComponent', () => {
  let component: CreatePointsComponent;
  let fixture: ComponentFixture<CreatePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
