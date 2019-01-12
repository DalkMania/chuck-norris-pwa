import { Component, OnInit } from '@angular/core';
import { TmDbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-top-list',
  templateUrl: './movie-top-list.component.html',
  styleUrls: ['./movie-top-list.component.scss']
})
export class MovieTopListComponent implements OnInit {
  loading: boolean;
  movies: any;

  constructor(private data: TmDbService) { }

  ngOnInit() {
    this.loading = true;
    this.data.gimmeChuckMovies().subscribe(data => {
      this.movies = this.data.gimmeTopChuckMovies(data)
      this.loading = false;
    })
  }

}
