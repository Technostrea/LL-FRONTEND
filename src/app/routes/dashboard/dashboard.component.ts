import {Component, inject} from '@angular/core';
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "@app/shared/components/sidebar/sidebar.component";
import {BrowserStorageService} from "@app/shared/utils/browser-storage/browser-storage.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent,
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected browserStorageService = inject(BrowserStorageService);
}
