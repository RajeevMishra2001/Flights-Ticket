import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvertisement } from './home-advertisement';

describe('HomeAdvertisement', () => {
  let component: HomeAdvertisement;
  let fixture: ComponentFixture<HomeAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdvertisement],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAdvertisement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
