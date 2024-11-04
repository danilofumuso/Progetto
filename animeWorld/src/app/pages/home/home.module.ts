import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { AuthorComponent } from './author/author.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, AuthorComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
