import {Component, HostListener, inject, OnInit} from '@angular/core';
import {JsonPipe, NgClass, NgIf} from "@angular/common";
import {BrowserStorageService} from "@app/shared/utils/browser-storage/browser-storage.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    JsonPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  notifying = true;
  darkMode = false;
  sidebarToggle = false;
  dropdownOpen = false;
  protected browserStorageService = inject(BrowserStorageService);

  toggleDarkMode() {
    this.browserStorageService.updateDarkMode();
  }

  closeDropdownOutside() {
    this.dropdownOpen = false;
  }


  toggleDropdown($event: MouseEvent) {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  ngOnInit() {
  }

  // Écoute les clics globaux pour fermer le dropdown si le clic est en dehors
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const isDropdown = target.closest('.dropdown-menu');
    if (!isDropdown && this.dropdownOpen) {
      this.dropdownOpen = false;
    }
  }
}
