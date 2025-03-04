import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-layout.component.html',
  styleUrl: './side-layout.component.css',
})
export class SideLayoutComponent {
  menuItems = [
    {
      label: 'Home',
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#343B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22V12H15V22" stroke="#343B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      route: '/home',
      isActive: true,
    },
    {
      label: 'Lessons',
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19V7H2V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H14C14.5304 21 15.0391 20.7893 15.4142 20.4142C15.7893 20.0391 16 19.5304 16 19V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3H16M22 3V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H16" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      route: '/lessons',
      isActive: false,
    },
    {
      label: 'Schedule',
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="16" y1="2" x2="16" y6="6" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="8" y1="2" x2="8" y6="6" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      route: '/schedule',
      isActive: false,
    },
    {
      label: 'Inbox',
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H16L14 15H10L8 12H2" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4 16.76 4H7.24C6.86792 4 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.6156 4.77679 5.45 5.11V5.11Z" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      route: '/inbox',
      isActive: false,
    },
    {
      label: 'Shop',
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 6H21" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      route: '/shop',
      isActive: false,
    },
    {
      label: 'Profile',
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      route: '/profile',
      isActive: false,
    },
    {
      label: 'Logout',
      icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 17L21 12L16 7" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 12H9" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
      route: '/logout',
      isActive: false,
    },
  ];

  // constructor(private router: Router) {}

  navigateTo(route: string) {
    // Deactivate all menu items
    this.menuItems.forEach((item) => (item.isActive = false));

    // Activate the selected menu item
    const selectedItem = this.menuItems.find((item) => item.route === route);
    if (selectedItem) {
      selectedItem.isActive = true;
    }

    // Handle special routes
    // if (route === '/logout') {
    //   // Implement logout logic here
    //   console.log('Logging out...');
    //   // For example: this.authService.logout()
    //   this.router.navigate(['/login']);
    //   return;
    // }

    // // Navigate to the selected route
    // this.router.navigate([route]);
  }
}
