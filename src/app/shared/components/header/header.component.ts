import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  notifying = true;
  darkMode = false;
  sidebarToggle = false;
  dropdownOpen = false;

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
  }

  closeDropdownOutside() {
    this.dropdownOpen = false;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  toggleDropdown($event: MouseEvent) {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  ngOnInit() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.darkMode = JSON.parse(savedDarkMode);
    }
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
