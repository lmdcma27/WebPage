import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPageComponent } from './global-page.component';

describe('GlobalPageComponent', () => {
  let component: GlobalPageComponent;
  let fixture: ComponentFixture<GlobalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
