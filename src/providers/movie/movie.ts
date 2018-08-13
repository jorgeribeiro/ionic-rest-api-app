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
  private apiKey = "b5d85aaefb88a3ba38ee9b04c8e089d1";

  constructor(public http: HttpClient) {
    
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.apiKey);
  }

}
