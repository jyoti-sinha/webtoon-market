import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './pages-routing.module';


import { PagesComponent } from './pages.component';
import { PublicHeaderComponent } from './partials/public-header/public-header.component';
import { PublicFooterComponent } from './partials/public-footer/public-footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [ PagesComponent, PublicHeaderComponent, PublicFooterComponent, HomeComponent ]
})
export class PagesModule { }