import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomMovieGeneratorService {

  //array with movie names
  movieTitles: string[] = [
    "Gone Girl",
    "The Girl with the Dragon Tattoo",
    "New Girl",
    "The Girl Next Door",
    "Girl, Interrupted",
    "The Girl on the Train",
    "The Danish Girl",
    "Gossip Girl",
    "Lars and the Real Girl",
    "Game of Thrones",
    "The Imitation Game",
    "Squid Game",
    "Sherlock Holmes: A Game of Shadows",
    "The Game",
    "Game Night",
    "Ender's Game",
    "Molly's Game",
    "Spy Game",
    "Gerald's Game",
    "Mission: Impossible - Ghost Protocol",
    "Ghost Rider",
    "Ghost",
    "Ghost in the Shell",
    "The Ghost Writer",
    "Ghost World",
    "Ghost Rider: Spirit of Vengeance",
    "Ghost Ship",
    "Ghost Dog: The Way of the Samurai",
    "Guardians of the Galaxy",
    "Guardians of the Galaxy Vol. 2",
    "Guardians of the Galaxy Vol. 3",
    "The Hitchhiker's Guide to the Galaxy",
    "Galaxy Quest",
    "The Guardians of the Galaxy Holiday Special",
    "The Hitchhiker's Guide to the Galaxy",
    "Galaxy of Terror",
    "The Tatami Galaxy",
    "Super Mario Galaxy",
    "The Godfather",
    "The Dark Knight",
    "The Shawshank Redemption",

  ];
  

  constructor() { }

  //get random movie from the array
  getRandomMovie(): Observable<string> {
    const randomNumber = Math.floor(Math.random() * this.movieTitles.length);
    const randomMovieTitle = this.movieTitles[randomNumber];
    return of(randomMovieTitle);
  }
}
