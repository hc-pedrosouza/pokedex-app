import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexHeaderComponent } from './pokedex-header/pokedex-header.component';
import { PokedexSearchComponent } from './pokedex-search/pokedex-search.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokedexHeaderComponent,
    PokedexSearchComponent,
    PokedexListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PokedexHeaderComponent,
    PokedexSearchComponent,
    PokedexListComponent
  ]
})
export class SharedModule { }
