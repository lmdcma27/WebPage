import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageBodyComponent } from './project-page-body.component';

describe('ProjectPageBodyComponent', () => {
  let component: ProjectPageBodyComponent;
  let fixture: ComponentFixture<ProjectPageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPageBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
