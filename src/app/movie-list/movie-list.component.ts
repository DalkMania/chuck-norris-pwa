import { Component, OnInit } from '@angular/core';
import { TmDbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  loading: boolean = false;
  movies: any[] = [];

  constructor(private data: TmDbService) { }

  ngOnInit() {
    this.loading = true;
    this.data.gimmeChuckMovies().subscribe(res => {
      this.movies = this.data.gimmeAllChuckMovies(res)
      this.loading = false;

    })
  }

}
