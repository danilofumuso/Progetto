import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iAnime } from '../interfaces/i-anime';
import { environment } from '../../environments/environment.development';
import { iAuthor } from '../interfaces/i-author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAllAuthors(): Observable<iAuthor[]> {
    return this.http.get<iAuthor[]>(environment.authorsUrl);
  }
}
