import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iAnime } from '../interfaces/i-anime';
import { iFavorite } from '../interfaces/i-favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavoritesByUserId(userId: number): Observable<iFavorite[]> {
    return this.http.get<iFavorite[]>(
      `${environment.favoritesUrl}?userId=${userId}`
    );
  }

  addFavorites(userId: number, anime: iAnime): Observable<iFavorite> {
    const newFavorite: Partial<iFavorite> = { anime, userId };
    return this.http.post<iFavorite>(environment.favoritesUrl, newFavorite);
  }

  removeFavorites(favorite: iFavorite): Observable<iFavorite> {
    return this.http.delete<iFavorite>(
      `${environment.favoritesUrl}/${favorite.id}`
    );
  }
}
