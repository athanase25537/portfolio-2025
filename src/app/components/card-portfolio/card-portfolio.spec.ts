import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPortfolio } from './card-portfolio';

describe('CardPortfolio', () => {
  let component: CardPortfolio;
  let fixture: ComponentFixture<CardPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
