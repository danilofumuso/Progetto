import { Component, Input } from '@angular/core';
import { iAnime } from '../../interfaces/i-anime';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs';
import { iFavorite } from '../../interfaces/i-favorite';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss',
})
export class AnimeComponent {
  @Input() anime!: iAnime;
  userId!: number;
  favorites: iFavorite[] = [];
  favorite!: iFavorite;

  constructor(
    private router: Router,
    private favoritesSvc: FavoritesService,
    private authSvc: AuthService
  ) {}

  navigateToAuthor(authorId: number) {
    this.router.navigate(['home/author', authorId]);
  }

  toggleFavorite(anime: iAnime) {
    anime.favorite = !anime.favorite;

    this.authSvc.user$
      .pipe(
        map((user) => {
          if (!user) return;
          this.userId = user.id;
          console.log(this.userId);
        })
      )
      .subscribe(() => {
        if (anime.favorite) {
          this.favoritesSvc.addFavorites(this.userId, anime).subscribe();
        } else {
          this.favoritesSvc
            .getFavoritesByUserId(this.userId)
            .subscribe((favorites) => {
              this.favorites = favorites;
              console.log(favorites);

              this.favoritesSvc.removeFavorites(this.favorite);
            }); //dobbiamo capire come passare il favorite da cancellare!
        }
      });
  }
}
