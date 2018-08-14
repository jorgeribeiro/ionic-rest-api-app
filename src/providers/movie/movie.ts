import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath= "https://api.themoviedb.org/3";
  private apiKey = "";

  constructor(public http: HttpClient) {
    
  }

  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.apiKey);
  }

  getMovie(movieId) {
    return this.http.get(this.baseApiPath + `/movie/${movieId}?api_key=` + this.apiKey);
  }

}
