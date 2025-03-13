import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-overview',
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
  standalone: true,
})
export class OverviewComponent {
  stats = {
    inProgress: 1,
    lessonsCompleted: 10,
    categoriesCompleted: 4,
    achievements: 5,
  };

  notificationCount: number = 1;
}
