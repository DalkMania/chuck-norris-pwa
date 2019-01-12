import { Component, OnInit } from '@angular/core';
import { ChuckDataService } from '../chuck-data.service';

@Component({
  selector: 'app-chuck-joke',
  templateUrl: './chuck-joke.component.html',
  styleUrls: ['./chuck-joke.component.scss']
})
export class ChuckJokeComponent implements OnInit {
  loading: boolean;
  joke: any;
  constructor(private data: ChuckDataService) { }

  ngOnInit() {
    this.loading = true;
    this.data.gimmeChuckJoke().subscribe(res => {
      this.joke = res;
      this.loading = false;

    })
  }

}
