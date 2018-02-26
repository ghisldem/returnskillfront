import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTable1Component } from './users-table1.component';

describe('UsersTable1Component', () => {
  let component: UsersTable1Component;
  let fixture: ComponentFixture<UsersTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
