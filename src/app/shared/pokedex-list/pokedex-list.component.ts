import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent {
  constructor(private pokeApiService: PokeApiService) {}

  private setAllPokemons: any;
  public getAllPokemons: any;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((resp) => {
      this.setAllPokemons = resp.results;
      this.getAllPokemons = this.setAllPokemons;
      console.warn(this.getAllPokemons);
    });
  }

  public searchFiltered(value: string) {
    const filter = this.setAllPokemons.filter((resp: any) => {
      return !resp.name.indexOf(value.toLowerCase());
    })
    console.log(filter)
    this.getAllPokemons = filter;
  }
}
