import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  languages = ['English'];
  selectedLanguage = 'English';

  onLanguageSelect(language: string) {
    this.selectedLanguage = language;
  }
}
