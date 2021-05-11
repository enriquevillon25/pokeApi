import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllPokemon( ){
    return this.http.get(`${this.baseUrl}/pokemon?limit=30&offset=0`);
  }

  getPokemon( url : any ){
    return this.http.get(url);
  }


}
