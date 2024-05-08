import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MoviesService } from '../movie-service.service';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.page.html',
  styleUrls: ['./girl.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GirlPage implements OnInit {
  movies:any=[];

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    //get data from omdbapi
    this.moviesService.GetGirlData().subscribe(
      (data)=>{
      this.movies = data.Search;
      }
      );
      
  }

}
