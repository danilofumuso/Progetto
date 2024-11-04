import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime/anime.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnimeComponent],
  imports: [CommonModule, FormsModule],
  exports: [AnimeComponent],
})
export class SharedModule {}
