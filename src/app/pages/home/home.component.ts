import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-home',
  imports: [OverviewComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {
  isHomePage = true;
}
