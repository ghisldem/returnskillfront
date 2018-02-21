import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTableExampleComponent } from './gen-table-example.component';

describe('GenTableExampleComponent', () => {
  let component: GenTableExampleComponent;
  let fixture: ComponentFixture<GenTableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenTableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
