import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Component } from './child2.component';

describe('Child2Component', () => {
  let component: Child2Component;
  let fixture: ComponentFixture<Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
