import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iAnime } from '../interfaces/i-anime';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient, private authorsSvc: AuthorsService) {}

  getAllAnimes() {
    return this.http.get<iAnime[]>(environment.animesUrl);
  }
}
