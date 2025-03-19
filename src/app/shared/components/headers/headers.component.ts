import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-headers',
  imports: [CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
})
export class HeadersComponent {
  @Input() MainTitle!: string;
  @Input() SubTitle: string = '';
  @Input() showProgressLine: boolean = false;
  @Input() progressPercentage: number = 0;
  @Input() progressColors: string[] = ['#63B3ED', '#4299E1'];
}
