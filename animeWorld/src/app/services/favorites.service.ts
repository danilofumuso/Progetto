import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iAnime } from '../interfaces/i-anime';
import { iFavorite } from '../interfaces/i-favorite';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  addFavorites(userId: number, anime: iAnime) {
    const newFavorite: Partial<iFavorite> = { anime, userId };
    return this.http.post<iFavorite>(environment.favoritesUrl, newFavorite);
  }

  removeFavorites(favorite: iFavorite) {
    return this.http.delete(environment.favoritesUrl + '/' + favorite.id);
  }
}
