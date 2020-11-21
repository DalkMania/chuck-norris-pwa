import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopListComponent } from './movie-top-list.component';

describe('MovieTopListComponent', () => {
  let component: MovieTopListComponent;
  let fixture: ComponentFixture<MovieTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
