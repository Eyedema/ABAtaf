import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopDetailComponent } from './stop-detail.component';

describe('StopDetailComponent', () => {
  let component: StopDetailComponent;
  let fixture: ComponentFixture<StopDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
