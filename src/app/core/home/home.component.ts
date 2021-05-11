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
  
  constructor(private _pokemonService: PokemonService, private http: HttpClient) { 

  }
  
  ngOnInit(): void {
    const sux = document.getElementById('submit');
    this._pokemonService.getAllPokemon().subscribe((response:any) =>{

      this.entrityAllPokemon = response.results;
      this.entrityAllPokemon.map((value:any) =>{
          this._pokemonService.getPokemon(value.url).subscribe((response:any)=>{
            this.entrityPokemon.push(response);
            console.log('respondee', response.sprites.front_default);
          })
      })
      
    })
    // console.log('pokemon',this.entrityPokemon);
  }

  nextPokemon():void {
    console.log('next pokemon');
    
    this.buttonSubscription =  fromEvent(this.button.nativeElement, 'click').subscribe(response => {
        console.log(response)
    });
  }
}
