import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPointsComponent } from './put-points.component';

describe('PutPointsComponent', () => {
  let component: PutPointsComponent;
  let fixture: ComponentFixture<PutPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
