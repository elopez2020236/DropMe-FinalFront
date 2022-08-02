import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdacionComponent } from './valdacion.component';

describe('ValdacionComponent', () => {
  let component: ValdacionComponent;
  let fixture: ComponentFixture<ValdacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValdacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValdacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
