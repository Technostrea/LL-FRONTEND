import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "@app/shared/components/sidebar/sidebar.component";
import {HeaderComponent} from "@app/shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'LL-FRONTEND';
  page: string = 'ecommerce';
  loaded: boolean = true;
  darkMode: boolean = true;
  stickyMenu: boolean = false;
  scrollTop: boolean = false;


  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    const darkModeFromStorage = localStorage.getItem('darkMode');
    if (darkModeFromStorage !== null) {
      this.darkMode = JSON.parse(darkModeFromStorage);
    }

    this.updateBodyClasses();
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.loaded = false;
      }, 500);
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    this.updateBodyClasses();
  }

  updateBodyClasses() {
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'text-bodydark');
      this.renderer.addClass(document.body, 'bg-boxdark-2');
    } else {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.removeClass(document.body, 'text-bodydark');
      this.renderer.removeClass(document.body, 'bg-boxdark-2');
    }
  }
}
