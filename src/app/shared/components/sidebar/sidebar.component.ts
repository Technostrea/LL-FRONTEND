import {Component, HostListener} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selected: string = 'Dashboard';
  page: string = 'ecommerce';
  sidebarToggle: boolean = true;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const sidebar = document.getElementById('sidebar');

    if (sidebar && !sidebar.contains(target)) {
      this.sidebarToggle = false;
    }
  }

  toggleSidebar(event: Event) {
    // this.sidebarToggle = !this.sidebarToggle;
    event.stopPropagation(); // Empêche la propagation de l'événement
    this.sidebarToggle = !this.sidebarToggle;
  }

  toggleSelection(item: string, event: Event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    this.selected = this.selected === item ? '' : item;
  }

  changeSelected(page: string) {
    this.selected = page;
    localStorage.setItem('selectedPage', page);
  }
}
