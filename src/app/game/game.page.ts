import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { MoviesService } from '../movie-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GamePage implements OnInit {

  movies:any=[];

  constructor(private moviesService:MoviesService) { }

  

  ngOnInit() {
    //get data from omdbapi
    this.moviesService.GetGameData().subscribe(
      (data)=>{
      this.movies = data.Search;
      }
      );
      
  }

}
