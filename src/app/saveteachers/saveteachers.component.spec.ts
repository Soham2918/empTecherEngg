import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveteachersComponent } from './saveteachers.component';

describe('SaveteachersComponent', () => {
  let component: SaveteachersComponent;
  let fixture: ComponentFixture<SaveteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveteachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
