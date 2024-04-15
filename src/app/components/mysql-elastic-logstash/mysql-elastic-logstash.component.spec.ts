import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlElasticLogstashComponent } from './mysql-elastic-logstash.component';

describe('MysqlElasticLogstashComponent', () => {
  let component: MysqlElasticLogstashComponent;
  let fixture: ComponentFixture<MysqlElasticLogstashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlElasticLogstashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlElasticLogstashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
