import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckDataService {

  constructor(private http: HttpClient) { }

  public gimmeChuckJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }

}
