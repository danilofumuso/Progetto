import { Component, Input } from '@angular/core';
import { iAnime } from '../../interfaces/i-anime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss',
})
export class AnimeComponent {
  @Input() anime!: iAnime;

  constructor(private router: Router) {}

  navigateToAuthor(authorId: number) {
    console.log(authorId);

    this.router.navigate(['home/author', authorId]);
  }
}
