import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllteachersComponent } from './allteachers.component';

describe('AllteachersComponent', () => {
  let component: AllteachersComponent;
  let fixture: ComponentFixture<AllteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllteachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
