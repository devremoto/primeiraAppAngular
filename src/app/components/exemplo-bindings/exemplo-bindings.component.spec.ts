import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploBindingsComponent } from './exemplo-bindings.component';

describe('ExemploBindingsComponent', () => {
  let component: ExemploBindingsComponent;
  let fixture: ComponentFixture<ExemploBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
