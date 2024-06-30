import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GlycemieListComponent } from './glycemie-list/glycemie-list.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, GlycemieListComponent, HttpClientModule, RouterModule, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'diabetes-tracker-front-end';
}
