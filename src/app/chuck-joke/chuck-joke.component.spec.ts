import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckJokeComponent } from './chuck-joke.component';

describe('ChuckJokeComponent', () => {
  let component: ChuckJokeComponent;
  let fixture: ComponentFixture<ChuckJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
