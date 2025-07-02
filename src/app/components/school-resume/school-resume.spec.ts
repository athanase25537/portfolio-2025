import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolResume } from './school-resume';

describe('SchoolResume', () => {
  let component: SchoolResume;
  let fixture: ComponentFixture<SchoolResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
