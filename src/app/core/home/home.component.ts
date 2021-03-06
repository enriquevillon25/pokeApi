import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { fromEvent, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../../models/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PokemonService]
})
export class HomeComponent implements OnInit {
  @ViewChild('submit', { static: true }) button: any;
  nextButton: any;
  buttonSubscription: any;
  entrityAllPokemon: any;
  entrityPokemon: IPokemon[] = [];
  pokemonActive: any;
  constructor(private _pokemonService: PokemonService, private http: HttpClient) { 

  }
  
  ngOnInit(): void {
    this._pokemonService.getAllPokemon().subscribe((response:any) =>{

      this.entrityAllPokemon = response.results;
      this.entrityAllPokemon.map((value:any) =>{
          this._pokemonService.getPokemon(value.url).subscribe((response:any)=>{
            this.entrityPokemon.push(response);
            if(this.entrityPokemon){
              this.pokemonActive = this.entrityPokemon[0].sprites.front_default;
            }
          })
      })
      
    })
  }

  nextPokemon():void {
    console.log('next pokemon');
    
    this.buttonSubscription =  fromEvent(this.button.nativeElement, 'click').subscribe(response => {
        console.log(response)
    });
  }
  onPokemon(i:any):void{
    console.log('onpokemon', i);
    this.pokemonActive = i.sprites.front_default;
  }
  sendSearch(i:any){
    console.log(i);
    this._pokemonService.searchPokemon(i).subscribe((response:any) =>{
      console.log(response);
      this.pokemonActive = response.sprites.front_default;
    })
  }
}
