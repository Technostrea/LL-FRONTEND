import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "@app/shared/components/sidebar/sidebar.component";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {BrowserStorageService} from './shared/utils/browser-storage/browser-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LL-FRONTEND';
  protected browserStorageService = inject(BrowserStorageService);
}
