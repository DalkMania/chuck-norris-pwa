import { Component, OnInit } from '@angular/core';
import { TmDbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  loading: boolean;
  movies: any;

  constructor(private data: TmDbService) { }

  ngOnInit() {
    this.loading = true;
    this.data.gimmeChuckMovies().subscribe(data => {
      this.movies = this.data.gimmeAllChuckMovies(data)
      this.loading = false;
   
    })
  }

}
