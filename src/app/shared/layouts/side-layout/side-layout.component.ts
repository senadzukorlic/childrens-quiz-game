import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenuItems } from '../../../core/config/menu.config';
@Component({
  selector: 'app-side-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-layout.component.html',
  styleUrl: './side-layout.component.css',
})
export class SideLayoutComponent {
  constructor(private router: Router) {}
  menuItems = MenuItems;
  navigateTo(route: string) {
    this.menuItems.forEach((item) => (item.isActive = false));

    const selectedItem = this.menuItems.find((item) => item.route === route);
    if (selectedItem) {
      selectedItem.isActive = true;
    }
    this.router.navigate([route]);
  }
}
