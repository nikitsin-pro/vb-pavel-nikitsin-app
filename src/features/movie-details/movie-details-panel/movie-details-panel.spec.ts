import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPanel } from './movie-details-panel';

describe('MovieDetailsPanel', () => {
  let component: MovieDetailsPanel;
  let fixture: ComponentFixture<MovieDetailsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
