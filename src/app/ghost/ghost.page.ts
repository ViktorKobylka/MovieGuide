import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MoviesService } from '../movie-service.service';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.page.html',
  styleUrls: ['./ghost.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GhostPage implements OnInit {

  movies:any=[];

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    //get data from omdbapi
    this.moviesService.GetGhostData().subscribe(
      (data)=>{
      this.movies = data.Search;
      }
      );
      
  }

}
