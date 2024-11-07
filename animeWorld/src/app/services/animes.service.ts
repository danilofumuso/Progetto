import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iAnime } from '../interfaces/i-anime';

import { iAuthor } from '../interfaces/i-author';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  getAnimeWithAuthor(authors: iAuthor[]): Observable<iAnime[]> {
    return this.http.get<iAnime[]>(environment.animesUrl).pipe(
      map((animes) => {
        return animes.map((anime) => {
          const animeAuthor = authors.find(
            (author) => author.id === anime.authorId
          );

          if (!animeAuthor) return anime;

          return {
            ...anime,
            author: animeAuthor.fullName,
          };
        });
      })
    );
  }
}
