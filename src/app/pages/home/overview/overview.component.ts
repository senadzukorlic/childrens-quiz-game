import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from '../../../shared/components/headers/headers.component';
@Component({
  selector: 'app-overview',
  imports: [CommonModule, HeadersComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
  standalone: true,
})
export class OverviewComponent {
  @Input() isHomePage: boolean = false;
  stats = {
    inProgress: 1,
    lessonsCompleted: 10,
    categoriesCompleted: 4,
    achievements: 5,
  };

  notificationCount: number = 1;
}
