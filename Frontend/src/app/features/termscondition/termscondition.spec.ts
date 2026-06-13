import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termscondition } from './termscondition';

describe('Termscondition', () => {
  let component: Termscondition;
  let fixture: ComponentFixture<Termscondition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termscondition],
    }).compileComponents();

    fixture = TestBed.createComponent(Termscondition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
