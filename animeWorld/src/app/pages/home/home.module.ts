import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [HomeComponent, AuthorComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
