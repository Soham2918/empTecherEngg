import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnggComponent } from './update-engg.component';

describe('UpdateEnggComponent', () => {
  let component: UpdateEnggComponent;
  let fixture: ComponentFixture<UpdateEnggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEnggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
