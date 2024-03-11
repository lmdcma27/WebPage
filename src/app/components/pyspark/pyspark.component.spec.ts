import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysparkComponent } from './pyspark.component';

describe('PysparkComponent', () => {
  let component: PysparkComponent;
  let fixture: ComponentFixture<PysparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysparkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PysparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
