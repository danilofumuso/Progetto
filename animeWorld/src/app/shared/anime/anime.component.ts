import { Component, Input } from '@angular/core';
import { iAnime } from '../../interfaces/i-anime';
import { Router } from '@angular/router';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss',
})
export class AnimeComponent {
  @Input() anime!: iAnime;

  constructor(private router: Router, private animesSvc: AnimesService) {}

  navigateToAuthor(authorId: number) {
    this.router.navigate(['home/author', authorId]);
  }

  toggleFavorite(anime: iAnime) {
    anime.favorite = !anime.favorite;
    this.animesSvc.updateAnime(anime).subscribe();
  }
}

// CI SERVE IL SERVICE FAVORITES, SFRUTTEREMO USER$ PER AVERE I PREFERITI DEL SOLO UTENTE LOGGATO.
