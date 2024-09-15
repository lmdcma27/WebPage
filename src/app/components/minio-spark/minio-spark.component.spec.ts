import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinioSparkComponent } from './minio-spark.component';

describe('MinioSparkComponent', () => {
  let component: MinioSparkComponent;
  let fixture: ComponentFixture<MinioSparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinioSparkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinioSparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
