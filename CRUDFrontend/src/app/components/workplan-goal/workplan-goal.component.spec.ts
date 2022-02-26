import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanGoalComponent } from './workplan-goal.component';

describe('WorkplanGoalComponent', () => {
  let component: WorkplanGoalComponent;
  let fixture: ComponentFixture<WorkplanGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
