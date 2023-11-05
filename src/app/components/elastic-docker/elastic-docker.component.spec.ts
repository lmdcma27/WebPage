import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticDockerComponent } from './elastic-docker.component';

describe('ElasticDockerComponent', () => {
  let component: ElasticDockerComponent;
  let fixture: ComponentFixture<ElasticDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElasticDockerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElasticDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
