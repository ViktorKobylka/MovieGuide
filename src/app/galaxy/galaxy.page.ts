import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MoviesService } from '../movie-service.service';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.page.html',
  styleUrls: ['./galaxy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GalaxyPage implements OnInit {

  movies:any=[];

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    //get data from omdbapi
    this.moviesService.GetGalaxyData().subscribe(
      (data)=>{
      this.movies = data.Search;
      }
      );
      
  }

}
