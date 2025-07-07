import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techno } from './techno';

describe('Techno', () => {
  let component: Techno;
  let fixture: ComponentFixture<Techno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
