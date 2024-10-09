import {Component} from '@angular/core';
import {SidebarComponent} from "@app/shared/components/sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
