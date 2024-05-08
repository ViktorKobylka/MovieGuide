import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Component, ViewChild, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { register } from 'swiper/element/bundle';

import { Swiper } from 'swiper';

import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';

import { MoviesService } from '../movie-service.service';

import { RandomMovieGeneratorService } from '../random-movie-generator.service';

import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, RouterLinkWithHref],
})

export class HomePage implements AfterViewInit, OnInit {


  ngAfterViewInit(): void {
    register();
  }

  //declare variables and array
  ShawsankPoster: any;
  GodfatherPoster: any;
  DarkKnightPoster: any;
  RandomMovieTitle: string = ' ';
  coordinates: any = "";
  lat: any = "";
  long: any = "";
  nearestCinema: string = '';
  minDistance: any;
  nearestCinemaName: string = '';
  cinemas = [
    { name: 'Palas', lat: 53.269847120266824, lon: -9.052939225241115 },
    { name: 'Omniplex Cinema Galway', lat: 53.259306196318796, lon: -9.077303201081836 },
    { name: 'IMC Cinema Galway', lat: 53.279649042845286, lon: -9.05074886978934 },
    { name: 'Eye Cinema Galway', lat: 53.28128218949325, lon: -9.03123772170576 },
    //{ name: 'Dublin location', lat: 53.3443876222537 , lon:  -6.400972516662055 }, 
  ];


  constructor(private movieService: MoviesService, private randomMovieGeneratorService: RandomMovieGeneratorService, private storage: Storage) {
  }

  async ionViewWillEnter() {
    //create storage
    await this.storage.create();
    //get nerest cinema name from our storage
    this.nearestCinema = await this.storage.get('nearestCinema');
  }

  async getGPS() {
    //get gps goordinates
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    this.getNearestCinema();
  }

  //method which calculates shortest distance
  public getNearestCinema(): any {
    //check for gps coordinates
    if (this.lat !== undefined && this.long !== undefined) {
      //initialize min distance
      this.minDistance = Infinity;

      //find nearest cinema
      for (const cinema of this.cinemas) {
        const distance = this.calculateDistance(this.lat, this.long, cinema.lat, cinema.lon);
        //update nearest cinema
        if (distance < this.minDistance) {
          this.minDistance = distance;
          this.nearestCinemaName = cinema.name;
        }
      }
      //store nearest cinema
      this.nearestCinema = this.nearestCinemaName;
      this.storage.set('nearestCinema', this.nearestCinemaName);
      return this.nearestCinema;
    }
  }

  //get radians
  rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  public calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; //Earth radius in km
    const dLat = this.rad(lat2 - lat1);
    const dLon = this.rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }




  ngOnInit() {

    //fetch movie data
    this.movieService.GetShawsankData().subscribe(
      (data) => {
        this.ShawsankPoster = data.Poster;
      }

    )

    this.movieService.GetGodfatherData().subscribe(
      (data) => {
        this.GodfatherPoster = data.Poster;
      }

    )

    this.movieService.GetDarkKnightData().subscribe(
      (data) => {
        this.DarkKnightPoster = data.Poster;
      }

    )

  }

  getRandomMovie(): void {
    this.randomMovieGeneratorService.getRandomMovie().subscribe(
      (movieTitle: string) => {
        this.RandomMovieTitle = movieTitle;
      }
    );
  }

}
