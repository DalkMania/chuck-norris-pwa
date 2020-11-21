import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TmDbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  loading: boolean = false;
  movie!: Object;
  id!: string;

  constructor(private route: ActivatedRoute, private data: TmDbService) {
    this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit() {
    this.loading = true;
    this.data.gimmeChuckMovieDetails(this.id).subscribe(data => {
      this.movie = data
      this.loading = false;
    });


  }

}
