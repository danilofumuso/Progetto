import { Component } from '@angular/core';
import { AnimesService } from '../../services/animes.service';
import { iAnime } from '../../interfaces/i-anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  animes: iAnime[] = [];

  constructor(private animesSvc: AnimesService) {}

  ngOnInit() {
    this.animesSvc.getAllAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }
}
