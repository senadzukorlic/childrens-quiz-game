import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { SideLayoutComponent } from '../../shared/layouts/side-layout/side-layout.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SideLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
