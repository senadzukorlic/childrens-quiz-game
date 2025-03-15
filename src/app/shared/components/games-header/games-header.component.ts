import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games-header',
  imports: [],
  templateUrl: './games-header.component.html',
  styleUrl: './games-header.component.css',
})
export class GamesHeaderComponent {
  @Input({ required: true }) mainTitle!: string;
  @Input({ required: true }) subtitle!: string;
}
