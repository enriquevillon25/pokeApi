import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import {  SharedModule } from '../shared/shared.module';
const userRoutes: Routes = [
  {
    path: " ", redirectTo:" ", pathMatch: "full"
  },
  {
    path: "", component: HomeComponent,

  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SharedModule
  ],
  exports:[
    HomeComponent
  ],
  providers:[
    PokemonService
  ]
})
export class CoreModule { }
