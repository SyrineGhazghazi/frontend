import { Component } from '@angular/core';
import { JokesService } from './jokes.service';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books: any = []
  joke: string = '';
  title = 'Dad jokes';
  constructor(private jokeService: JokesService) { }  
  fetchJoke(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data;
      console.log(data)
    });
  }


  //5edmet l prof
 /* title = 'GL-P-24';
  age;

  traitement(msg) {
    alert(msg);
  }*/
}




/*
  export class AppComponent {
    books: any = []
    joke: string = '';
    title = 'Dad jokes';
    constructor(private jokeService: JokesService) { }  
    fetchJoke(): void {
      this.jokeService.getJoke().subscribe((data: any) => {
        this.joke = data.joke;
      });
    }
  }
*/