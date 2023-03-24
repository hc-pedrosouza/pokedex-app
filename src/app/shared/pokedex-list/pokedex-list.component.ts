import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent {
  constructor(private pokeApiService: PokeApiService) {}

  public getAllPokemons: undefined;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((resp) => {
      this.getAllPokemons = resp.results;
      console.warn(this.getAllPokemons);
    });
  }
}
