import { Component, Input } from '@angular/core';
import { iAnime } from '../../../interfaces/i-anime';
import { iAuthor } from '../../../interfaces/i-author';
import { AuthorsService } from '../../../services/authors.service';
import { AnimesService } from '../../../services/animes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss',
})
export class AuthorComponent {
  authors: iAuthor[] = [];
  animesOfAuthor: iAnime[] = [];
  authorId!: number;

  constructor(
    private route: ActivatedRoute,
    private authorsSvc: AuthorsService,
    private animesSvc: AnimesService
  ) {}

  ngOnInit() {
    //prendo l'id dalla barra dell'URL
    this.route.paramMap.subscribe((params) => {
      this.authorId = Number(params.get('id'));
      //prendo tutti gli autori e popolo authors con il giusto autore (grazie all'id)
      this.authorsSvc.getAllAuthors().subscribe((authors) => {
        this.authors = authors.filter((author) => author.id === this.authorId);

        this.getAnimes();
      });
    });
  }

  //FUNZIONE PER PRENDERE TUTTI GLI ANIMI DELL'AUTORE
  getAnimes() {
    this.animesSvc.getAnimeWithAuthor(this.authors).subscribe((animes) => {
      //qui arrivano tutti gli anime e li filtro in base all'autorId ricavato nell'onInit
      this.animesOfAuthor = animes.filter(
        (anime) => anime.authorId === this.authorId
      );
    });
  }
}
