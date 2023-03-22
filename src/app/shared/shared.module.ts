import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexHeaderComponent } from './pokedex-header/pokedex-header.component';
import { PokedexSearchComponent } from './pokedex-search/pokedex-search.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';



@NgModule({
  declarations: [
    PokedexHeaderComponent,
    PokedexSearchComponent,
    PokedexListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexHeaderComponent,
    PokedexSearchComponent,
    PokedexListComponent
  ]
})
export class SharedModule { }
