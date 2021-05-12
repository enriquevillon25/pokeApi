import {  Component, OnInit, Output,EventEmitter } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import {  PokemonService  } from '../../services/pokemon.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  searchInput: FormControl = new FormControl();
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.searchInput = new FormControl('', Validators.required);
   
  }

  sendSearhPokemon():void{
    //  this._pokemonService.searchPokemon(this.searchInput.value).subscribe(response=>{
    //   console.log(response);
    // })
    this.newItemEvent.emit(this.searchInput.value);
  }

}
