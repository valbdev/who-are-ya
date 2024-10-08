import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl: string = "http://localhost:8000/api"

  constructor(private httpClient: HttpClient) {}

  /**
   * The following methods use httpClient to perform
   * HTTP requests to the API.
   */

  /**
   * @returns A random Player.
   */
  getRandomPlayer(): Observable<Player> {
    return this.httpClient.get<Player>(this.baseUrl+"/player/random/");
  }

  /**
   * @param name A string that resembles a player's name.
   * @returns A list if players corresponding the given name.
   */
  getPlayersFromName(name: string|null): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.baseUrl+`/players/${name}`);
  }

  /**
   * @param id The player's id.
   * @returns The wanted player.
   */
  getPlayerFromId(id: string): Observable<Player> {
    return this.httpClient.get<Player>(this.baseUrl+`/player/${id}`);
  }
}
