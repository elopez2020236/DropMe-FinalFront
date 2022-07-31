import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProComponent } from './general-pro.component';

describe('GeneralProComponent', () => {
  let component: GeneralProComponent;
  let fixture: ComponentFixture<GeneralProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
