import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnggComponent } from './add-engg.component';

describe('AddEnggComponent', () => {
  let component: AddEnggComponent;
  let fixture: ComponentFixture<AddEnggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
