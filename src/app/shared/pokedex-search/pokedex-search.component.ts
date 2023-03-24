import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrls: ['./pokedex-search.component.scss']
})
export class PokedexSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit():void {
  }
  public searchUserInput(value: string) {
    this.emmitSearch.emit(value)
  }
}
