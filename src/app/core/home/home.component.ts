import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PokemonService]
})
export class HomeComponent implements OnInit {

  constructor(private _pokemonService: PokemonService) { }
  
  ngOnInit(): void {
    this._pokemonService.getAllPokemon().subscribe(response =>{
      console.log(response);
    })
  }

}
