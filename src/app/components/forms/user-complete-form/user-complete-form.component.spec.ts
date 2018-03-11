import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompleteFormComponent } from './user-complete-form.component';

describe('UserCompleteFormComponent', () => {
  let component: UserCompleteFormComponent;
  let fixture: ComponentFixture<UserCompleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
