import { Component } from '@angular/core';
import { AnimesService } from '../../services/animes.service';
import { iAnime } from '../../interfaces/i-anime';
import { AuthorsService } from '../../services/authors.service';
import { iAuthor } from '../../interfaces/i-author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  animes: iAnime[] = [];
  authors: iAuthor[] = [];

  constructor(
    private animesSvc: AnimesService,
    private authorsSvc: AuthorsService
  ) {}

  ngOnInit() {
    this.authorsSvc.getAllAuthors().subscribe((authors) => {
      this.authors = authors;
      this.getAnimes();
    });
  }

  getAnimes() {
    this.animesSvc.getAnimeWithAuthor(this.authors).subscribe((animes) => {
      this.animes = animes;
    });
  }
}
