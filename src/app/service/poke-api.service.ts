import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((resp) => {
        resp.results.map((respPokemons: any) => {
          this.apiGetPokemons(respPokemons.url).subscribe( resp => respPokemons.status = resp)

        })
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        resp => resp
      )
    )
  }
}
