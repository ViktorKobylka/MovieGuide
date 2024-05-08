import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }
  
  //get data from omdbapi
  GetGirlData():Observable<any>{
    
  return this.httpClient.get('https://www.omdbapi.com/?i=tt3896198&apikey=9a756555&s=%27girl%27');
}
GetGameData():Observable<any>{
    
  return this.httpClient.get('https://www.omdbapi.com/?i=tt3896198&apikey=9a756555&s=%27game%27');
}
GetGhostData():Observable<any>{
    
  return this.httpClient.get('https://www.omdbapi.com/?i=tt3896198&apikey=9a756555&s=%27ghost%27');
}
GetGalaxyData():Observable<any>{
    
  return this.httpClient.get('https://www.omdbapi.com/?i=tt3896198&apikey=9a756555&s=%27galaxy%27');
}
  GetShawsankData():Observable<any>
  {
    return this.httpClient.get('https://www.omdbapi.com/?i=tt0111161&apikey=9a756555');
  }

  GetGodfatherData():Observable<any>
  {
    return this.httpClient.get('https://www.omdbapi.com/?i=tt0068646&apikey=9a756555');
  }

  GetDarkKnightData():Observable<any>
  {
    return this.httpClient.get('https://www.omdbapi.com/?i=tt0468569&apikey=9a756555');

  }
  
  
}


