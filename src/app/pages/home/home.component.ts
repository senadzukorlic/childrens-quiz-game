import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {
  stats = {
    inProgress: 1,
    lessonsCompleted: 10,
    categoriesCompleted: 4,
    achievements: 5,
  };

  notificationCount: number = 1;
}
