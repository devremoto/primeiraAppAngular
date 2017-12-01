import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploOutputComponent } from './exemplo-output.component';

describe('ExemploOutputComponent', () => {
  let component: ExemploOutputComponent;
  let fixture: ComponentFixture<ExemploOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
