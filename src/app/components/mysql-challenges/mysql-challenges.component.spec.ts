import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlChallengesComponent } from './mysql-challenges.component';

describe('MysqlChallengesComponent', () => {
  let component: MysqlChallengesComponent;
  let fixture: ComponentFixture<MysqlChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlChallengesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
