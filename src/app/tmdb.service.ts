import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TmDbService {

  constructor(private http: HttpClient ) { }

  gimmeChuckMovies() {
    return this.http.get('https://api.themoviedb.org/3/person/51576/movie_credits?api_key=fc44a3404d9ea33d5004a453b1cca36c&language=en-US&append_to_response=images')
  }

  gimmeAllChuckMovies(chuckMovies) {
    let sorted = chuckMovies.cast.sort((a, b) => parseFloat(b.release_date) - parseFloat(a.release_date))
    return sorted;
  }

  gimmeChuckMovieDetails(id) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=fc44a3404d9ea33d5004a453b1cca36c&append_to_response=videos,images,credits')
  }

  gimmeTopChuckMovies(chuckMovies) {
    let sorted = chuckMovies.cast.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity))
    let top8 = sorted.slice(0, 12)
    return top8;
  }

}
