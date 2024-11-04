import { Component, Input } from '@angular/core';
import { iAnime } from '../../interfaces/i-anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss',
})
export class AnimeComponent {
  @Input() anime!: iAnime;
}
