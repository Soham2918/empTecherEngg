import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateteachersComponent } from './updateteachers.component';

describe('UpdateteachersComponent', () => {
  let component: UpdateteachersComponent;
  let fixture: ComponentFixture<UpdateteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateteachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
