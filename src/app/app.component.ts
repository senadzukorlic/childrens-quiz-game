import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideLayoutComponent } from './shared/layouts/side-layout/side-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-learning-platform';
}
